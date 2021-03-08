import React from "react";
import Title from "../components/Title";
// import Nav from "../components/Nav";
import Content from "../components/Content";
import { useAuth } from "../contexts/FirebaseContext";
import Main from "./Main";
import { Redirect } from "react-router-dom";



export default function  Dashboard(){
  const { currentUser, signout} = useAuth()
  console.log(currentUser)

  async function handleLogout(e){
    e.preventDefault()
    
    await signout()
  }
  
  if (!currentUser) {
    return <Redirect to="/" component={Main}/>
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
      <Content />
    </>
  ); 
  }
 
};
