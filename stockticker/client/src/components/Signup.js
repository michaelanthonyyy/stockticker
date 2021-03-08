import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/FirebaseContext";
import { BrowserRouter as Router, Redirect, Route,  Link } from "react-router-dom";
import Dashboard from "../pages/Dashboard";



export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)  

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password's do not match. Please re-enter password and password confirmation")
    }
    try {
      setError("")
      setLoading(true)
      console.log(loading)
      await signup(emailRef.current.value, passwordRef.current.value)
      
    } catch {
      setError("Failed to create account")
    }
    // setLoading(false)
  }
 
  if (loading === true) {
    return <Redirect to="/user" component={Dashboard}/>
  } else {
  return (

    // <Route exact path="/signup">
      <div className="row">
                    
      {/* {true ? <Redirect to="/user" /> : <div></div>}  */}
            
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
          <button type="submit" className="btn btn-primary" disabled={loading}>
            Sign Up
          </button>
          Already Have An Account? <Link to="/login">Log In</Link>
        </form>

      </div>
    </div>
    // </Route>
  );}
};

{/* <div className="form-group col-md-6">
              <label for="inputFirstName">First Name</label>
              <input type="text" className="form-control" id="inputFirstName" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputLastName">Last Name</label>
              <input type="text" className="form-control" id="inputLastName" />
            </div> */}

{/* <div className="form-group col-md-6">
              <label for="inputUserName">Username</label>
              <input type="text" className="form-control" id="inputUserName" />
            </div> */}