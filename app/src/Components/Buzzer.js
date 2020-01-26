import React, { Component } from "react";
import buzzerImage from "../monsterBall.png";
import "./css/Room.css";

class Buzzer extends Component {
  render() {
    return (
      <div
        className="buttonContainer"
        style={{ margin: "2vw", height: "80vh" }}
      >
        <img className="button" src={buzzerImage} alt="buzzer" />
        <div className="timer"></div>
      </div>
    );
  }
}

export default Buzzer;
