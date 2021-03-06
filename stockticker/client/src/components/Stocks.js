import React, { useEffect, useRef } from "react";
import Dygraph from "dygraphs";
import API from "../utils/API";
import UserStock from "./UserStock";

const Stocks = () => {
  const graphRef = useRef();
  useEffect(() => {
    API.getDailyStock("GOOGL").then((result) => {
      console.log(result);
      var data = "Date, Close\n";
      for (const entry of result.data) {
        data += entry.date + ", ";
        data += entry.close + "\n";
      }
      console.log(data);
      const g = new Dygraph(
        graphRef.current,
        data,
        {} // the options
      );
    });
  });

  return (
    <div className="ctn">
      <div className="row">
        <div className="col col-12">
          <h4>Top Trending Daily Stocks / Chart / Optional </h4>
        </div>

        <div className="col col-6">
          <div className="row">
            <UserStock />
            <div className="col col-12">
              <p>Container 1 - Row 1 - Col 2</p>
            </div>
          </div>
        </div>

        <div className="col col-6">
          <h4>Chart / Stock Info</h4>
          <div ref={graphRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
