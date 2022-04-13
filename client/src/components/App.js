import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
  const [user, setUser] = useState(null);
  const loginUser = (user) => {
    setUser(user);
    props.loginUser(user);
  };
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          loginUser(data);
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
  }, [user]);

  useEffect(() => {
    fetch(`/guides`)
      .then((r) => r.json())
      .then((guides) => {
        props.fetchGuides(guides);
      });
  }, [user]);

  const navigate = useNavigate();

  return (
    <div className="App">
      {user && <NavBar />}
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setUser={loginUser} navigate={navigate} />}
        />

        <Route
          path="/signup"
          element={<SignupPage navigate={navigate} setUser={loginUser} />}
        />

        <Route path="/guides/:id" element={<GuidePage />} />

        <Route path="/guides" element={<GuideContainer />} />

        <Route path="/me" element={<UserPage user={user} />} />

        <Route
          path="/logout"
          element={<LogOut setUser={setUser} navigate={navigate} />}
        />

        <Route path="/" element={<HomePage user={user} />} />
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    guides: state.guides,
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
