import React from "react";
import { useAuth } from "../contexts/FirebaseContext";
import { Redirect } from "react-router-dom";



export default function Nav(){
  const { currentUser, logout} = useAuth()
  console.log(currentUser)

  if function handleLogout(){
      logout()
  }.then(


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">Stockticker</a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  ))
};

