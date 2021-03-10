import React, { useEffect, useRef } from "react";
import Dygraph from "dygraphs";
import API from "../utils/API";
import Graph from "./Graph";
import UserStock from "./UserStock";

const Stocks = ({ title, ticker }) => {
  return (
    <div className="ctn container">
      <div className="row">
        <div className="col-12">
          <h4>Top Trending Daily Stocks / Chart / Optional </h4>
        </div>

        <div className="col-12">
          <h4>Chart / Stock Info</h4>
          <Graph ticker={ticker} />
        </div>

        <div className="col-12">
          <h4>Saved Stocks</h4>
          <div className="row">
            <UserStock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
