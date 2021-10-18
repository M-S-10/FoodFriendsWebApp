import React from "react";
import "./signUp.css";

import axios from "axios";

const apiUrl = "https://htv-api.9aditya9.repl.co/register";

const inputContainer = { width: "80%", margin: "0 auto" };

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.credentials = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleData = async () => {
    const data = {
      name: this.credentials.name,
      email: this.credentials.email,
      password: this.credentials.password
    };
    console.log(data);
    axios
      .post(apiUrl, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  modifyLoginCredentials(credential, value) {
    this.credentials[credential] = value;
  }

  logInEmailAndPassword() {
    //console.log(this.credentials);
    //this.handleData();
    window.location.replace("/login");
  }

  signUp() {
    //console.log(this.credentials);
    this.handleData();
    window.location.replace("/roleSelection");
    //this.logInEmailAndPassword();
  }

  render() {
    return (
      <div
        id="login-container"
        className="d-flex justify-content-center align-items-center"
      >
        <div id="login-card">
          <label className="header-one full-width text-center">Sign Up</label>
          <hr className="seperator" />
          <div className="input-group mb-3" style={inputContainer}>
            <div
              className="d-flex justify-content-center align-items-center input-group-prepend"
              style={{ width: "13%", color: "black" }}
            >
              <i className="fas fa-envelope"></i>
            </div>
            <input
              type="email"
              placeholder="First Name"
              style={{ width: "38.5%", marginRight: "10px" }}
              onChange={(e) => {
                this.modifyLoginCredentials("name", e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Last Name"
              style={{ width: "38.5%" }}
              onChange={(e) => {
                this.modifyLoginCredentials("email", e.target.value);
              }}
            />
          </div>
          <div className="input-group mb-3" style={inputContainer}>
            <div
              className="d-flex justify-content-center align-items-center input-group-prepend"
              style={{ width: "13%", color: "black" }}
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
              style={{ width: "13%", color: "black" }}
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
            id="signup-button"
            className="full-width btn custom-button"
            onClick={(e) => this.signUp()}
          >
            Sign Up
          </button>
          <button
            id="login-button"
            className="full-width outline-button btn custom-button"
            onClick={(e) => this.logInEmailAndPassword()}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;
