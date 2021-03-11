import React, { useRef, useEffect, useState } from "react";
import API from "../utils/API";
import Dygraph from "dygraphs";
import { useAuth } from "../context/FirebaseContext";

function Graph({ height = 200, width = 300, ticker, saved = true }) {
  const { currentUser } = useAuth();
  const [graphState, setGraphState] = useState(currentUser);
  const [graph, setGraph] = useState();
  const graphRef = useRef();

  useEffect(() => {
    API.getDailyStock(ticker).then((result) => {
      var data = "Date, Close\n";
      var count = 0;
      for (const entry of result.data) {
        data += entry.date + ", ";
        data += entry.close + "\n";
        if (count > 365) {
          break;
        } else {
          count++;
        }
      }
      if (!graph) {
        const g = new Dygraph(
          graphRef.current,
          data,
          { showRangeSelector: true } // the options
        );
        setGraph(g);
      }
    });
  });

  function handleClick(e) {
    if (currentUser) {
      API.addComment({
        ticker: ticker,
        content: "",
      }).then(({ data }) => {
        console.log(data._id);
        API.updateUserByEmail(graphState.email, {
          $push: { stocks: [ticker], comments: data._id },
        }).then((dbModel) => {
          console.log(dbModel);
        });
      });
    }
  }

  return (
    <div className="card-body">
      <h4>{ticker}</h4>
      <div style={{ width: width, height: height }} ref={graphRef}></div>
      {saved ? (
        <div />
      ) : (
        <button onClick={handleClick} className="graph-save-btn">
          Save Stock
        </button>
      )}
    </div>
  );
}

export default Graph;
