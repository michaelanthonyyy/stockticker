import React, { useState, useEffect } from "react";
import API from "../utils/API";

const Search = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!input) {
      alert("Please add a stock to search");
      return;
    }
    onAdd(input);

    setInput("");
  };

  return (
    <div className="conatainer">
      <form className="stock-form" onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control"
          placeholder="Search for stocks"
        />
        <button className="btn btn-outline-primary">Search</button>
      </form>
    </div>
  );
};

export default Search;
