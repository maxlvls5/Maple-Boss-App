import React from "react";
import goodBye from "../goodBye.gif";
import { Button, Segment } from "semantic-ui-react";

function LogOut({ navigate, setUser }) {
  const handleClick = () => {
    fetch(`/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((r) => r.json())
      .then(() => {
        setUser(null);
        navigate("/");
      });
  };

  return (
    <div className="goodbye">
      <h1 align="center">Cya Later Gamer</h1>

      <img className="goodBye-img" src={goodBye} alt="goodbye img" />

      <div align="center" className="logout">
        {/* <button onClick={handleClick}>LogOut</button> */}
        <Segment inverted>
          <Button onClick={handleClick} inverted color="blue">
            Logout
          </Button>
        </Segment>
      </div>
    </div>
  );
}

export default LogOut;
