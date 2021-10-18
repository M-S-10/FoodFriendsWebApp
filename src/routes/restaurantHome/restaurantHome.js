import React from "react";
import "./restaurantHome.css";
import { Geolocation } from "react-geolocation";
import axios from "axios";

const apiUrl = "https://htv-api.9aditya9.repl.co/restaurants";

const inputContainer = { width: "80%", margin: "0 auto" };

class RestaurantHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.credentials = {
      food: "",
      longitude: "",
      latitude: "",
      res_name: ""
    };
  }

  handleData = async () => {
    const data = {
      food: this.credentials.food,
      longitude: 0,
      latitude: 0,
      res_name: this.credentials.res_name
    };
    //this.getLocation();
    console.log(data);
    axios
      .post(apiUrl, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  modifyLoginCredentials(credential, value) {
    this.credentials[credential] = value;
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      this.credential.latitude = position.coords.latitude;
      this.credential.longitude = position.coords.longitude;
    });
  }

  showPosition(position) {
    this.credentials.latitude = position.coords.latitude;
    this.credentials.longitude = position.coords.longitude;
  }

  postStuff() {
    //console.log(this.credentials);
    this.handleData();
    //window.location.replace("/home");
  }

  signUp() {
    console.log(this.credentials);
    window.location.replace("/login");
  }

  render() {
    return (
      <div
        id="login-container"
        className="d-flex justify-content-center align-items-center"
      >
        <div id="login-card">
          <label className="header-one full-width text-center">
            Create New Task
          </label>
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
              placeholder="Amount of food left (kg)"
              style={{ width: "80%" }}
              onChange={(e) => {
                this.modifyLoginCredentials("food", e.target.value);
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
              placeholder="Restaurant Name"
              style={{ width: "80%" }}
              onChange={(e) => {
                this.modifyLoginCredentials("res_name", e.target.value);
              }}
            />
          </div>
          <hr className="seperator" />
          <button
            id="login-button"
            className="full-width outline-button btn custom-button"
            onClick={(e) => this.postStuff()}
          >
            {/* <Geolocation
              render={({
                fetchingPosition,
                position: { coords: { latitude, longitude } = {} } = {},
                error,
                getCurrentPosition
              }) => (
                <div>
                  <button onClick={getCurrentPosition}>Get Position</button>
                  {error && <div>{error.message}</div>}
                  <pre>
                    latitude: {latitude}
                    longitude: {longitude}
                  </pre>
                </div>
              )}
            /> */}
            Post Task
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurantHome;
