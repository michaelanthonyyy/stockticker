import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/FirebaseContext"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password and Password confirmation do not match")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

  return (

    
      <div className="row">
      <div className="col col-6 mx-auto">
        <alert>{error}</alert>
        <form onSubmit={handleSubmit}>
          <div className="form-row" >
            {/* <div className="form-group col-md-6">
              <label for="inputFirstName">First Name</label>
              <input type="text" className="form-control" id="inputFirstName" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputLastName">Last Name</label>
              <input type="text" className="form-control" id="inputLastName" />
            </div> */}
            <div className="form-group col-md-12" >
              <label for="inputEmail">Email</label>
              <input type="email" className="form-control" id="inputEmail" ref={emailRef} required/>
            </div>
            {/* <div className="form-group col-md-6">
              <label for="inputUserName">Username</label>
              <input type="text" className="form-control" id="inputUserName" />
            </div> */}
            <div className="form-group col-md-6">
              <label for="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                ref={passwordRef}
                required
              />
            </div>
            <div className="form-group col-md-6">
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
        </form>

      </div>
    </div>
  );
};

// export default Signup;
