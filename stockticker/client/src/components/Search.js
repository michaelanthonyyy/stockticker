import React, { useState, useEffect } from "react";
import API from "../utils/API";

const Search = ({ value, onChange, onSubmit }) => {
  return (
    <div className="conatainer search-ctn">
      <form className="stock-form" onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="form-control"
          placeholder="Enter a stock to search"
        />
        <button className="btn btn-outline-primary">Search</button>
      </form>
    </div>
  );
};

export default Search;
