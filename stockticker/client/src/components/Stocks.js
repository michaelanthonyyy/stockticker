import React, { useEffect, useRef } from "react";
import Dygraph from "dygraphs";
import API from "../utils/API";
import Graph from "./Graph";
import UserStock from "./UserStock";
import BusinessNews from "./BusinessNews";

//?: Change height and with of the graph div to percentage to test if it will auto resize with each breakpoint

//!: Seperate each grid container into its own Row for spacing

//?: Try displaying saved stocks and graphs in card components for a better on screen look
//?: If card the components don't work, custom make card type containers...

const Stocks = ({ title, ticker }) => {
  return (
    <div className="ctn container-fluid">
      <div className="row search-stock-ctn">
        <div className="col col-xs-12 col-md-6 search-graph-ctn">
          <Graph height={400} width={500} ticker={ticker} saved={false} />
        </div>
        <div className="col col-xs-12 col-md-6 news-ctn">
          <div className="row">
            <div className="col">
              <BusinessNews />
            </div>
          </div>
        </div>
      </div>
      <div className="row saved-stock-ctn">
          <UserStock />
      </div>
    </div>
  );
};

export default Stocks;
