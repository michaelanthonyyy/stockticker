import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/FirebaseContext";
import { Link, useHistory } from "react-router-dom";


export default function Login () {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      useHistory().push("/user")
    } catch {
      useHistory().push("/user")
      // setError("Failed to Login to Account. Please try again")
    }
    setLoading(false)
  }



  return (
    <div className="row my-5">
      <div className="col col-6 mx-auto">
        <div className="alert">{error}</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="inputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              ref = {emailRef}
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
              ref = {passwordRef}
              required
            />
          </div>
          <button disabled={loading} type="submit" className="btn btn-primary">
            Log In
          </button>
          Don't Have An Account? <Link to="/signup">Sign Up</Link>
        </form>
      </div>
    </div>
  );
};


