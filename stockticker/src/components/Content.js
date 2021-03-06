import React from "react";
import Stocks from "./Stocks";

const Content = () => {
  return (
    <div className="container-fluid">
      <div className="conatainer">
        <form className="stock-form">
          <input
            type="text"
            className="form-control"
            placeholder="Search for stocks"
          />
          <button className="btn btn-outline-primary">Search</button>
        </form>
      </div>
      <Stocks />
    </div>
  );
};

export default Content;
