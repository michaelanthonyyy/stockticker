import React, { useEffect, useRef } from "react";
import Dygraph from "dygraphs";
import API from "../utils/API";
import Graph from "./Graph";
import UserStock from "./UserStock";
import BusinessNews from "./BusinessNews";

const Stocks = ({ title, ticker }) => {
  return (
    <div className="ctn container">
      <div className="row">
        <div className="col-12">
          <h4>Top Trending Daily Stocks / Chart / Optional </h4>
        </div>

        <div className="col col-sm-12 col-md-6">
          <div className="row">
            <UserStock />
            <div className="col-12">
              <p>Container 1 - Row 1 - Col 2</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6">
          <h4>Chart / Stock Info</h4>
          <Graph ticker={ticker} saved={false} />
          <BusinessNews />
        </div>
      </div>
    </div>
  );
};

export default Stocks;
