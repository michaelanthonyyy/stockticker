import React from "react";

const Search = () => {
  return (
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
  );
};

export default Search;
