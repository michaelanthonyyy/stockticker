import React from "react";

const Stocks = () => {
  return (
    <div className="ctn">
      <div className="row">
        <div className="col col-12">
          <h4>Top Trending Daily Stocks / Chart / Optional </h4>
        </div>

        <div className="col col-4">
          <div className="row">
            <div className="col col-12">
              <h4>Saved Stocks Container</h4>
            </div>
            <div className="col">
              <h4>Optional Container</h4>
            </div>
          </div>
        </div>
        <div className="col col-8">
          <h4>Chart / Stock Info</h4>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
