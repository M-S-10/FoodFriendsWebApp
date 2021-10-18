import React from "react";
import "./login.css";

import axios from "axios";

const inputContainer = { width: "80%", margin: "0 auto" };

const apiUrl = "https://htv-api.9aditya9.repl.co/login";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.credentials = {
      email: "",
      password: ""
    };
  }

  handleData = async () => {
    const data = {
      email: this.credentials.email,
      password: this.credentials.password
    };
    console.log(data);
    axios
      .get(apiUrl, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  modifyLoginCredentials(credential, value) {
    this.credentials[credential] = value;
  }

  logInEmailAndPassword() {
    //console.log(this.credentials);
    this.handleData();
    //window.location.replace("/home");
  }

  signUp() {
    window.location.replace("/signUp");
  }

  render() {
    return (
      <div
        id="login-container"
        className="d-flex justify-content-center align-items-center"
      >
        <div id="login-card">
          <label className="header-one full-width text-center">
            Welcome Back!
          </label>
          <hr className="seperator" />
          <div className="input-group mb-3" style={inputContainer}>
            <div
              className="d-flex justify-content-center align-items-center input-group-prepend"
              style={{ width: "15%", color: "black" }}
            >
              <i className="fas fa-envelope"></i>
            </div>
            <input
              type="email"
              placeholder="Enter your email address ..."
              style={{ width: "80%" }}
              onChange={(e) => {
                this.modifyLoginCredentials("email", e.target.value);
              }}
            />
          </div>
          <div className="input-group mb-3" style={inputContainer}>
            <div
              className="d-flex justify-content-center align-items-center input-group-prepend"
              style={{ width: "15%", color: "black" }}
            >
              <i className="fas fa-lock"></i>
            </div>
            <input
              type="password"
              placeholder="Enter your password ..."
              style={{ width: "80%" }}
              onChange={(e) => {
                this.modifyLoginCredentials("password", e.target.value);
              }}
            />
          </div>
          <hr className="seperator" />
          <button
            id="login-button"
            className="full-width outline-button btn custom-button"
            onClick={(e) => this.logInEmailAndPassword()}
          >
            Login
          </button>
          <button
            id="signup-button"
            className="full-width btn custom-button"
            onClick={(e) => this.signUp()}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default LogIn;
