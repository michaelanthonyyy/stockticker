import React, { useEffect, useRef } from "react";
import Dygraph from 'dygraphs';
import API from "../utils/API";
import Graph from "./Graph";

const Stocks = () => {

  return (
    <div className="row">
      <div className="col col-12">
        <p>Conatiner 1 - Col 1</p>
      </div>
      <div className="col col-8">
        <p>Conatiner 1 - Col 2</p>
        <Graph ticker={"GOOGL"}/>
      </div>
      <div className="col col-4">
        <p>Conatiner 1 - Col 3</p>
        <div className="row">
          <div className="col col-12">
            <p>Container 1 - Row 1 - Col 1</p>
          </div>
          <div className="col">
            <p>Container 1 - Row 1 - Col 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
