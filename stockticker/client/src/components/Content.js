import React from "react";
import Stocks from "./Stocks";
import Search from "./Search";

const Content = () => {
  return (
    <div className="container-fluid">
      <Search />
      <Stocks />
    </div>
  );
};

export default Content;
