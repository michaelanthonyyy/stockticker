import React from "react";
import Title from "../components/Title";
import Nav from "../components/Nav";
import Content from "../components/Content";
import { useAuth } from "../contexts/FirebaseContext";



const Dashboard = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)
  return (
    <>
      <Nav />
      <Title />
      <Content />
    </>
  );
};

export default Dashboard;
