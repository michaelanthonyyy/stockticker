import React from "react";

const Login = () => {
  return (
    <div className="container login-ctn">
      <div className="row my-5">
        <div className="col col-sm-12 col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <form className="login-form">
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
