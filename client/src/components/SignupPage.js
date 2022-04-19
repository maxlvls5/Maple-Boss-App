import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form, Icon } from "semantic-ui-react";

function SignupPage({ navigate, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirm = (e) => setPasswordConfirm(e.target.value);

  const passwordMatch = (p1, p2) => {
    if (p1 && p2 && p1 === p2) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordMatch(password, passwordConfirm)) {
      alert("Your password and password confirmation do not match.");
      return false;
    }
    const newUser = { username: username, password: passwordConfirm };
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then(setUser);

    navigate("/");
  };

  return (
    <div>
      <div align="center" className="form-image"></div>
      <h1 align="center">Signup!</h1>
      <div className="glass">
        {/* <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => handleUsername(e)}
          />
          <label> Password</label>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => handlePassword(e)}
          />
          <label> Confirm Password</label>
          <input
            type="password"
            value={passwordConfirm}
            placeholder="password"
            onChange={(e) => handleConfirm(e)}
          />
          <div align="center" className="submit-newuser">
            <button type="submit">Submit!</button>
          </div>
          <NavLink to="/login">
            <div align="center" className="login">
              <button> Login </button>
            </div>
          </NavLink>
        </form> */}

        <Form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <Form.Field>
            <label>Username</label>
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(e) => handleUsername(e)}
            />
          </Form.Field>
          <Form.Field>
            <label> Password</label>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => handlePassword(e)}
            />
          </Form.Field>
          <Form.Field>
            <label> Confirm Password</label>
            <input
              type="password"
              value={passwordConfirm}
              placeholder="password"
              onChange={(e) => handleConfirm(e)}
            />
          </Form.Field>
          <Button color="olive" className="login-Button" type="submit">
            Submit!
          </Button>
          <NavLink to="/login">
            <div align="center" className="Signup">
              <Button color="yellow" className="Signup" type="submit" animated>
                <Button.Content visible>Login!</Button.Content>
                <Button.Content hidden>
                  <Icon name="sign-in" />
                </Button.Content>
              </Button>
            </div>
          </NavLink>
        </Form>
      </div>
    </div>
  );
}

export default SignupPage;
