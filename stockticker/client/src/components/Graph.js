import React, { useRef, useEffect } from "react";
import API from "../utils/API";
import Dygraph from 'dygraphs';

function Graph({ height = 300, width = 400, ticker }) {
    const graphRef = useRef();

    useEffect(() => {
        API.getDailyStock(ticker)
          .then(result => {
            console.log(result);
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
            console.log(data);
            const g = new Dygraph(
              graphRef.current, data,
              { showRangeSelector: true }                                   // the options
            );
          });
    
      });

      return (
        <div style={{width: width, height: height}} ref={graphRef}></div>
      )

}

export default Graph;