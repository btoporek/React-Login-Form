import React from "react";
import Navbar from "./navbar";

export default class LoginForm extends React.Component {
  //class for the login form; always use export default and extends React.Component
  render() {
    // must use render()
    return (
      //insert HTML body below; called Navbar class by inserting into body tags
      <body id="login-body">
        <Navbar />
        <center>
          <div id="outside">
            <div className="card" id="login">
              <div className="card-header">
                <h3>Log In</h3>
              </div>
              <div className="card-body">
                <label for="user">Username </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="user"
                  required
                ></input>
                <br></br>
                <br></br>
                <label for="pw">Password </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="pw"
                  required
                ></input>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </center>
      </body>
    );
  }
}
