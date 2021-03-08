import React, { useRef } from "react";
import { useAuth } from "../contexts/FirebaseContext";

export default function Login () {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()
  }



  return (
    <div className="row my-5">
      <div className="col col-6 mx-auto">
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


