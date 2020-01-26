import React, { Component } from "react";
import buzzerImage from "../monsterBall.png";
import "./css/Buzzer.css";

class Buzzer extends Component {
  render() {
    return (
      <div className="buzzer-container">
        <div className="buzzer__last-user">{renderLastUser()}</div>
        <img className="buzzer" src={buzzerImage} alt="buzzer" />
        <div className="buzzer__timer">{renderTimer()}</div>
      </div>
    );
  }
}

const renderLastUser = () => {
  return "Kyuhyeon Choi";
};

const renderTimer = () => {
  return "09:43";
};

export default Buzzer;
