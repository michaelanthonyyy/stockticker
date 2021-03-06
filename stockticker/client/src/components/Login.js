import React, { useRef, useState } from "react";
import { useAuth } from "../context/FirebaseContext";
import { Redirect, Link, useHistory } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [userLogin, setUserLogin] = useState(false);
  const [error, setError] = useState("");
  let history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setUserLogin(true);
      console.log("hello");
      await login(emailRef.current.value, passwordRef.current.value);
      console.log("hello");
      history.push("/user");
    } catch {
      setError("Failed to Login to Account. Please try again");
    }
    setUserLogin(false);
  }

  // if (userLogin === true) {
  //   return <Redirect to="/user" component={Dashboard}/>
  // } else {
  return (
    <div className="container-fluid login-ctn">
      <div className="row">
        <div className="alert col-12">{error}</div>
        <div className="col-12 login-form-ctn">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="inputEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                ref={emailRef}
                required
                id="inputEmail"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                ref={passwordRef}
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Log In
            </button>
            <span>
              Don't Have An Account?{" "}
              <Link to="/signup">
                <a className="signup-reDir">Sign Up</a>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
// };
