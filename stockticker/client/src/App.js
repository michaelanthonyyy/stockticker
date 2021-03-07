import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { AuthProvider } from "./contexts/FirebaseContext";
import { auth } from "./Firebase";

function App() {
  return (
    <div>
      {/* <Dashboard /> */}
      <AuthProvider>
      <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
