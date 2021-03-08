import React, { useState, useEffect } from "react";
import API from "../utils/API";

const Search = ({ value, onChange, onSubmit }) => {
  return (
    <div className="conatainer">
      <form className="stock-form" onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="form-control"
          placeholder="Search for stocks"
        />
        <button className="btn btn-outline-primary">Search</button>
      </form>
    </div>
  );
};

export default Search;
