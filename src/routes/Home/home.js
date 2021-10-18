// import React from "react";
// import "./home.css";
// import Taskitem from "../../widgets/taskItem/taskItem";
// import { GoogleApiWrapper } from "google-maps-react";

// function App() {
//   return (
//     <div>
// <div className="App" id="left">
//   <h2>Centralize</h2>
// </div>
// <div className="App" id="left2">
//   <h2>Tasks</h2>
// </div>
// <div className="App" id="right">
//   <div id="map"></div>
//   <script
//     async
//     defer
//     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDF7UloVbR8hAW4Czzm4VQTXzBjO1_e35Y&callback=initMap"
//   ></script>
// </div>
//     </div>
//   );
// }

// function initMap() {
//   var location = { lat: 33.518589, lng: -86.810356 };
//   var map = new window.google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: location
//   });
//   console.log("googleeee");
// }

// export default App;

import React, { useRef, useEffect, useState } from "react";
import "./home.css";
import Taskitem from "../../widgets/taskItem/taskItem";
import { GoogleApiWrapper } from "google-maps-react";

import axios from "axios";

const REACT_APP_API_KEY = "AIzaSyDF7UloVbR8hAW4Czzm4VQTXzBjO1_e35Y";

const apiUrl = "https://htv-api.9aditya9.repl.co/getres";

const App = ({ placeName = "new york" }) => {
  const googleMapRef = useRef();
  const [data, setData] = useState([]);
  let googleMap;
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      getLatLng();
    });
  }, []);

  const handleData = async () => {
    const res = await axios
      .get(apiUrl)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));

    // for (var i = 0; i < data.length; i++) {
    //   document.getElementById("tasks").innerHTML += "<Taskitem/>";
    // }
  };

  useEffect(() => handleData(), []);

  const createGoogleMap = (coordinates) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 16,
      center: {
        lat: coordinates.lat(),
        lng: coordinates.lng()
      },
      disableDefaultUI: true
    });
  };
  const getLatLng = () => {
    let lat, lng, placeId;
    new window.google.maps.Geocoder().geocode(
      { address: `${placeName}` },
      function (results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          placeId = results[0].place_id;
          createGoogleMap(results[0].geometry.location);
          lat = results[0].geometry.location.lat();
          lng = results[0].geometry.location.lng();
          new window.google.maps.Marker({
            position: { lat, lng },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: `${placeName}`
          });
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      }
    );
  };
  return (
    <div>
      <div className="App" id="left">
        <h2>Food Friends</h2>
      </div>
      <div className="App" id="left2">
        <h2>Tasks</h2>
      </div>
      {/* {
        data..forEach(element => {
          
        });
      } */}
      <div id="tasks">
        {/* {data.map((val) =>{
        return (
          <Taskitem />;
        )}} */}
        {/*data.map((val, index) =>
          index < 9 ? console.log(val) : <Taskitem val={val} />
        )*/}
        {data.map((val, index) => (
          <Taskitem val={val} />
        ))}
      </div>
      <div id="google-map" ref={googleMapRef} />
    </div>
  );
};

export default App;
