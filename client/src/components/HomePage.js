function HomePage({ user }) {
  return (
    <div align="center" className="homepage">
      <h1> EatMe </h1>
      <div className="home-container">
        {/* <img src={require("../images/EatME1.jpg")} alt="eatme logo" /> */}
        <p>Welcome to MapleBoss</p>
        {/* <img src={require("../images/cookie.gif")} alt="cookie monster" /> */}
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
    </div>
  );
}
