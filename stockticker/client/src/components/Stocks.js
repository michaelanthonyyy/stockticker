import React, { useEffect, useRef } from "react";
import Dygraph from "dygraphs";
import API from "../utils/API";
import Graph from "./Graph";
import UserStock from "./UserStock";

const Stocks = ({ title, ticker }) => {
  return (
    <div className="ctn container">
      <div className="row">
        <div className="col col-sm-12 col-md-6">
          <UserStock />
        </div>

        <div className="col-sm-12 col-md-6">
          <h4>Chart / Stock Info</h4>
          <Graph ticker={ticker} />
        </div>
      </div>
    </div>
  );
};

export default Stocks;
