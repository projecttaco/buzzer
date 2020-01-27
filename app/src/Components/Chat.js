import React, { Component } from "react";
import { Icon } from "antd";
import "./css/Chat.css";

class Chat extends Component {
  render() {
    return (
      <div className="chat-container">
        <div className="chat__screen">아무나 눌러라~</div>
        <div className="chat__write">
          <div className="chat__write-column">
            <Icon type="plus-square" />
          </div>
          <div className="chat__write-column">
            <input
              type="text"
              placeholder="Send message"
              className="chat__write-input"
            />
          </div>
          <div className="chat__write-column">
            <Icon type="smile" />
          </div>
          <div className="chat__write-column">
            <Icon type="number" />
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
