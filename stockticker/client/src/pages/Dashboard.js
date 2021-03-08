import React, { useState } from "react";
import Title from "../components/Title";
import Nav from "../components/Nav";
import Content from "../components/Content";
import Search from "../components/Search";
import API from "../utils/API";

const Dashboard = () => {
  const [stocks, setStocks] = useState([
    {
      title: "Tesla",
    },
  ]);
  const [stockSearch, setStockSearch] = useState("");

  const handelInputChange = (e) => {
    const { value } = e.target;
    setStockSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getDailyStock(stockSearch)
      .then((res) => {
        console.log(res);
        setStocks(res);
        console.log([...stocks, res.data[0].symbol]);
      })
      .catch((err) => console.log(err));
    setStockSearch("");
  };
  return (
    <>
      <Nav />
      <Title />
      <Search
        value={stockSearch}
        onChange={handelInputChange}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Dashboard;
