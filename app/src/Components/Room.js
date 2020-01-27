import React, { Component } from "react";
import Chat from "./Chat";
import Buzzer from "./Buzzer";
import Header from "./Header";

import "./css/Room.css";

class Room extends Component {
  render() {
    return (
      <div className="room-container">
        <Header />
        <Buzzer />
        <Chat />
      </div>
    );
  }
}

export default Room;
