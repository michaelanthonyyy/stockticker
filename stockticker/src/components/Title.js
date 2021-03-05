import React from "react";

const Title = () => {
  return (
    <div class="container-fluid jumbo-container">
      <div class="container jumbo-text-container">
        <h4 class="display-4">Stock Dashboard</h4>
        <p>
          Welcome, <span>Username</span>!
        </p>
      </div>
      <div className="container jumbo-form-container">
        <form className="stock-form">
          <input
            type="text"
            className="form-control"
            placeholder="Search for stocks"
          />
          <button className="btn btn-outline-primary">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Title;
