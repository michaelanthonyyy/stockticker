import React, { useRef, useEffect } from "react";
import API from "../utils/API";
import Dygraph from 'dygraphs';

function Graph({ width = 400, ticker }) {
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

      return (
        <div ref={graphRef}></div>
      )

}

export default Graph;