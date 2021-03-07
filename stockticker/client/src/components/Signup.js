import React from "react";

const Signup = () => {
  return (
    <div className="row signup-ctn">
      <div className="col col-sm-12 col-md-6 mx-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Sign Up Form</h5>
            <form className="signup-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputUserName">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputUserName"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
