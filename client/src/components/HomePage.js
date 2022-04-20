import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

function HomePage(props) {
  return (
    <div align="center" className="homepage">
      {/* <h1> MapleBoss </h1> */}
      <div className="home-container">
        <img
          src={
            "https://res.cloudinary.com/dtglqdhwm/image/upload/v1649950525/maple_obpjbi.jpg"
          }
          alt="logo"
        />
        <p>Welcome to MapleBoss</p>
      </div>
      {!props.user?.id && (
        <div className="signup-login-container">
          <NavLink to="/signup">
            <Button color="teal">SignUp!</Button>
          </NavLink>
          <NavLink to="/login">
            <Button color="blue">Login!</Button>
          </NavLink>
        </div>
      )}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BB8UBAAdCGY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* <h3>Top Bosses</h3>
      <div className="container"></div> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(HomePage);

//
