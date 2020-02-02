import React, { Component } from "react";
import { Avatar } from "antd";
import "./css/Message.css";

class Message extends Component {
  state = {};

  render() {
    return (
      // {this.props.}
      <div className="message-container">
        <Avatar size={64} icon="user" />
        <div className="message">
          <div className="message message__bubble">{this.props.content}</div>
          <div className="message_time-stamp">{Date.now()}</div>
        </div>
      </div>
    );
  }
}

export default Message;
