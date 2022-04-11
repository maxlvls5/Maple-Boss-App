import React from "react";
import { NavLink } from "react-router-dom";

function HomePage({ user }) {
  return (
    <div align="center" className="homepage">
      <h1> MapleBoss </h1>
      <div className="home-container">
        <p>Welcome to MapleBoss</p>
      </div>
      {!user && (
        <div className="signup-login-container">
          <NavLink to="/signup">
            <button> SignUp </button>
          </NavLink>
          <NavLink to="/login">
            <button> Login </button>
          </NavLink>
        </div>
      )}
      <h3>Top Bosses</h3>
      <div className="container"></div>
    </div>
  );
}

export default HomePage;
