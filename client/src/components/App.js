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
import { addGuide } from "../redux/actions";
import GuideCard from "./GuideCard";
import "../index.css";

function App(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => setUser(data));
      }
    });
  }, []);

  const [guides, setGuides] = useState([]);
  useEffect(() => {
    fetch(`/guides`)
      .then((r) => r.json())
      .then((guides) => {
        setGuides(guides);
        console.log(guides);
        console.log(props);
        guides.forEach(props.addGuide);
        console.log(props.state);
      });
  }, [user]);

  const navigate = useNavigate();

  return (
    <div className="App">
      {user && <NavBar />}
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setUser={setUser} navigate={navigate} />}
        />

        <Route
          path="/signup"
          element={<SignupPage navigate={navigate} setUser={setUser} />}
        />

        <Route
          path="/guides/:id"
          element={
            <GuidePage
              user={user}
              setUser={setUser}
              guides={guides}
              setGuides={setGuides}
            />
          }
        />

        <Route path="/guides" element={<GuideContainer guides={guides} />} />

        <Route path="/me" element={<UserPage user={user} guides={guides} />} />

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
    addGuide: (guide) => dispatch(addGuide(guide)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//mapDispatchToProps (addGUide) adds a single guide at a time
