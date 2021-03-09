import React, { useState, useEffect } from "react";
import Title from "../components/Title";
// import Nav from "../components/Nav";
import Content from "../components/Content";
import { useAuth } from "../contexts/FirebaseContext";
import Main from "./Main";
import { Redirect } from "react-router-dom";
import Search from "../components/Search";
import API from "../utils/API";
import Stocks from "../components/Stocks";

export default function Dashboard() {
  const { currentUser, signout } = useAuth();
  console.log(currentUser);

  const [stocks, setStocks] = useState([]);

  // const [stockSearch, setStockSearch] = useState("");

  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   setStockSearch(value);
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  // };

  const searchStock = (stock) => {
    console.log(stock);
    setStocks([...stocks, stock]);
    console.log(stocks);
  };

  async function handleLogout(e) {
    e.preventDefault();

    await signout();
  }

  if (!currentUser) {
    return <Redirect to="/" component={Main} />;
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand">Stockticker</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
        <Title />
        <Search onAdd={searchStock} />
        <Stocks ticker={stocks} />
      </>
    );
  }
}
