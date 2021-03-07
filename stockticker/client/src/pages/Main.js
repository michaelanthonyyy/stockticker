import React from "react";
import { Link } from "react-router-dom";

// import Login from "../components/Login";
// import MainNav from "../components/MainNav";
// import Signup from "../components/Signup";

const Main = () => {
  return (
    <div className="intro-ctn">
      <nav className="navbar navbar-expand-lg nav-main">
        <span className="navbar-brand mx-auto">Stockticker</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign-Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Main;
