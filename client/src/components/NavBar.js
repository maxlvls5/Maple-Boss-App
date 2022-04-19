import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        <Button color="green" animated>
          <Button.Content visible>Home</Button.Content>
          <Button.Content hidden>
            <Icon name="home" />
          </Button.Content>
        </Button>
      </NavLink>
      <NavLink to="/guides">
        <Button color="blue" animated>
          <Button.Content visible>Guides</Button.Content>
          <Button.Content hidden>
            <Icon name="edit outline" />
          </Button.Content>
        </Button>
      </NavLink>
      <NavLink to="/me">
        <Button color="purple" animated>
          <Button.Content visible>Gamer Profile</Button.Content>
          <Button.Content hidden>
            <Icon name="user" />
          </Button.Content>
        </Button>
      </NavLink>
      <NavLink to="/logout">
        <Button color="red" animated>
          <Button.Content visible>LogOut</Button.Content>
          <Button.Content hidden>
            <Icon name="log out" />
          </Button.Content>
        </Button>
      </NavLink>
    </div>
  );
}

export default NavBar;
