import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//routes
import Home from "./routes/Home/home.js";
import LoginPage from "./routes/login/login";
import SignUp from "./routes/signUp/signUp";
import RoleSelection from "./routes/roleSelection/roleSelection";
import RestaurantHome from "./routes/restaurantHome/restaurantHome";
//import LandingPage from "./routes/landing/landing"

/*
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/roleSelection">
            <RoleSelection />
          </Route>
          <Route path="/restaurantHome">
            <RestaurantHome />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
