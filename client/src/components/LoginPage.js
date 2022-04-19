import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Icon, Form } from "semantic-ui-react";

function LoginPage({ setUser, navigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
          navigate("/");
        });
      }
    });
  };

  return (
    <div>
      <div align="center"></div>
      <h1 align="center">Welcome Back Gamer</h1>
      <div className="glass">
        <Form className="login-form" onSubmit={(e) => handleLogin(e)}>
          <Form.Field>
            <label className="login-label">Username</label>
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(e) => handleUsername(e)}
            />
          </Form.Field>
          <Form.Field>
            <label className="login-label">Password</label>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => handlePassword(e)}
            />
          </Form.Field>

          <Button
            color="yellow"
            className="login-Button"
            type="submit"
            animated
          >
            <Button.Content visible>Login!</Button.Content>
            <Button.Content hidden>
              <Icon name="sign-in" />
            </Button.Content>
          </Button>

          <NavLink to="/signup">
            <div align="center" className="Signup">
              <Button color="olive" animated>
                <Button.Content visible>SignUp!</Button.Content>
                <Button.Content hidden>
                  <Icon name="sign-in" />
                </Button.Content>
              </Button>
            </div>
          </NavLink>
        </Form>
        {/* <form className="login-form" onSubmit={(e) => handleLogin(e)}>
          <label className="login-label">Username</label>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => handleUsername(e)}
          />
          <label className="login-label">Password</label>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => handlePassword(e)}
          />
          <div align="center" className="login-button">
            <button type="submit">Login</button>

            <Button type="submit" animated>
              <Button.Content visible>Login!</Button.Content>
              <Button.Content hidden>
                <Icon name="sign-in" />
              </Button.Content>
            </Button>
          </div>
          <NavLink to="/signup">
            <div align="center" className="Signup">
              <Button animated>
                <Button.Content visible>SignUp!</Button.Content>
                <Button.Content hidden>
                  <Icon name="sign-in" />
                </Button.Content>
              </Button>
            </div>
          </NavLink>
        </form> */}
      </div>
    </div>
  );
}
export default LoginPage;
