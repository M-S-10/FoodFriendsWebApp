import React from "react";
import "./roleSelection.css";

const inputContainer = { width: "80%", margin: "0 auto" };

class RoleSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.credentials = {
      email: "",
      password: ""
    };
  }

  modifyLoginCredentials(credential, value) {
    this.credentials[credential] = value;
  }

  restaurant() {
    console.log(this.credentials);
    window.location.replace("/restaurantHome");
  }

  volunteer() {
    window.location.replace("/home");
  }

  render() {
    return (
      <div
        id="login-container"
        className="d-flex justify-content-center align-items-center"
      >
        <div id="login-card">
          <label className="header-one full-width text-center">
            Pick Your Role:
          </label>
          <hr className="seperator" />
          <button
            id="roleSelBtn"
            className="full-width outline-button btn custom-button"
            onClick={(e) => this.restaurant()}
          >
            Restaurant
          </button>
          <button
            id="roleSelBtn"
            className="full-width btn custom-button"
            onClick={(e) => this.volunteer()}
          >
            Volunteer
          </button>
        </div>
      </div>
    );
  }
}

export default RoleSelection;
