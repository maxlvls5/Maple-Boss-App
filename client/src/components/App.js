import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import GuidePage from "./GuidePage";
import GuideContainer from "./GuideContainer";
import UserPage from "./UserPage";
import HomePage from "./HomePage";
import SignupPage from "./SignupPage";
import LogOut from "./LogOut";
import { connect } from "react-redux";
import { fetchGuides, fetchBosses, loginUser } from "../redux/actions";

import "../index.css";

function App(props) {
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          props.loginUser(data);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch(`/bosses`)
      .then((r) => r.json())
      .then((bosses) => {
        props.fetchBosses(bosses);
      });
  }, [props.user]);

  useEffect(() => {
    fetch(`/guides`)
      .then((r) => r.json())
      .then((guides) => {
        props.fetchGuides(guides);
      });
  }, [props.user]);

  const navigate = useNavigate();

  return (
    <div className="App">
      {props.user && <NavBar />}
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setUser={props.loginUser} navigate={navigate} />}
        />

        <Route
          path="/signup"
          element={<SignupPage navigate={navigate} setUser={props.loginUser} />}
        />

        <Route
          path="/guides/:id"
          element={props.user ? <GuidePage /> : <Navigate replace to="/" />}
          s
        />

        <Route path="/guides" element={<GuideContainer />} />

        <Route
          path="/me"
          element={props.user ? <UserPage /> : <Navigate replace to="/" />}
        />

        <Route
          path="/logout"
          element={<LogOut setUser={props.loginUser} navigate={navigate} />}
        />

        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    guides: state.guides,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGuides: (guides) => dispatch(fetchGuides(guides)),
    fetchBosses: (bosses) => dispatch(fetchBosses(bosses)),
    loginUser: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//mapDispatchToProps (addGUide) adds a single guide at a time
// *check useSelector / dispatch
