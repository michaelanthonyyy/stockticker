import React, { useRef, useState } from "react";
import { useAuth } from "../context/FirebaseContext";
import { Redirect, Link, useHistory } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import API from "../utils/API";



export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [userLogin, setUserLogin] = useState(false)
  let history = useHistory()  

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password's do not match. Please re-enter password and password confirmation")
    }
    try {
      setError("")
      setUserLogin(true)
      console.log(userLogin)
      API.addUser({email: emailRef.current.value,
      password: passwordRef.current.value});
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/user");
    } catch {
      setError("Failed to create account")
    }
    setUserLogin(false)
  }
 
  // if (userLogin === true) {
  //   return <Redirect to="/user" component={Dashboard}/>
  // } else {
  return (

      <div className="row">            
      <div className="col col-6 mx-auto">
      <div className="alert">{error}</div>
        <form onSubmit={handleSubmit}>
          <div className="form-row" >
            <div className="form-group col-md-12" >
              <label for="inputEmail">Email</label>
              <input type="email" 
              className="form-control" 
              id="inputEmail" 
              ref={emailRef} 
              required 
              />
            </div>
            <div className="form-group col-md-12">
              <label for="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                ref={passwordRef}
                required
              />
            </div>
            <div className="form-group col-md-12">
              <label for="inputPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirm"
                ref={passwordConfirmRef}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={userLogin}>
            Sign Up
          </button>
          Already Have An Account? <Link to="/login">Log In</Link>
        </form>

      </div>
    </div>
  );
}


