import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">Stockticker</a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
