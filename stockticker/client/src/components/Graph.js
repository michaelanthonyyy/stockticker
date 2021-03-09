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
            var data = "Date, Close\n";
            var count = 0;
            for (const entry of result.data) {
              data += entry.date +", ";
              data += entry.close + "\n";
              if (count > 365) {
                  break;
              } else {
                  count++;
              }
            }
            const g = new Dygraph(
              graphRef.current, data,
              { showRangeSelector: true }                                   // the options
            );
          });
    
      });

      function handleClick(e) {
        if (currentUser) {
            API.addComment({
                ticker: ticker
            }).then(({data}) => {
                console.log(data._id);
                API.updateUserByEmail(graphState.email, {$push: {stocks: [ticker], comments: data._id}})
                .then(dbModel => {
                  console.log(dbModel);
                });
            })

        }
      }

      return (
          <div>
            <h4>{ticker}</h4>
            <div style={{width: width, height: height}} ref={graphRef}></div>
            <button onClick={handleClick}>Save Stock</button>
          </div>

      )

}

export default Graph;