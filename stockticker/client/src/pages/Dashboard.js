import React, { useState } from "react";
import Title from "../components/Title";
import Content from "../components/Content";
import { useAuth } from "../context/FirebaseContext";
import Main from "./Main";
import { Redirect } from "react-router-dom";
import Search from "../components/Search";
import API from "../utils/API";
import Stocks from "../components/Stocks";

export default function Dashboard() {
  const { currentUser, signout } = useAuth();
  console.log(currentUser);

  // const [stocks, setStocks] = useState([]);
  const [stockSearch, setStockSearch] = useState("");
  const [searchSubmit, setSearchSubmit] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setStockSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setSearchSubmit(stockSearch);

    setStockSearch("");
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
        <nav className="navbar navbar-expand-lg db-nav">
          <span className="navbar-brand">Stockticker</span>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </ul>
        </nav>
        <div className="dash-main-ctn">
          {/* <Title /> */}
          <Search
            value={stockSearch}
            onChange={handleInputChange}
            onSubmit={handleFormSubmit}
          />
          <Stocks ticker={searchSubmit} />
        </div>
      </>
    );
  }
}
