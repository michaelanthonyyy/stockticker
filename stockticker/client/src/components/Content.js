import React, { useState } from "react";
import Stocks from "./Stocks";
import API from "../utils/API";

const Content = () => {
  return (
    <div className="container-fluid">
      <Stocks />
    </div>
  );
};

export default Content;
