import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header2";
// import Footer from './components/Footer/Footer'
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Routes from "./components/Routes/Routes";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
      {/* <Footer/> */}

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
    </Router>
  );
};

export default connect()(App);
