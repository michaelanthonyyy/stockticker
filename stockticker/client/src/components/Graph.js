import React, { useRef, useEffect, useState } from "react";
import API from "../utils/API";
import Dygraph from 'dygraphs';
import { useAuth } from "../contexts/FirebaseContext";

function Graph({ height = 300, width = 400, ticker }) {
    const { currentUser } = useAuth();
    const [graphState, setGraphState] = useState(currentUser);
    const graphRef = useRef();

    useEffect(() => {
        API.getDailyStock(ticker)
          .then(result => {
            console.log(result);
            var data = "Date, Close\n";
            for (const entry of result.data) {
              data += entry.date +", ";
              data += entry.close + "\n";
            }
            console.log(data);
            const g = new Dygraph(
              graphRef.current, data,
              { showRangeSelector: true }                                   // the options
            );
          });
    
      });

      function handleClick(e) {
        if (currentUser) {
            API.updateUserByEmail(graphState.email, { stocks: [ticker]})
            .then(dbModel => {
              console.log(dbModel);
            });
        }
      }

      return (
          <div>
            <div style={{width: width, height: height}} ref={graphRef}></div>
            <button onClick={handleClick}>Save Stock</button>
          </div>

      )

}

export default Graph;