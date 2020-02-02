import React, { Component } from "react";
import { Icon } from "antd";
import Message from "./Message";
import "./css/Chat.css";

class Chat extends Component {
  state = {
    messages: [
      {
        sender: "someone",
        content: "blahblah"
      }
    ]
  };

  render() {
    return (
      <div className="chat-container">
        <div className="chat__screen">
          {this.state.messages.map(message => (
            <Message
              sender={message.sender}
              content={message.content}
            ></Message>
          ))}
        </div>
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

  sendMessage = (sender, content) => {
    this.setState({
      messages: this.state.messages.push({ sender, content })
    });
  };

  getMessage = (sender, content) => {
    this.setState({
      messages: this.state.messages.push({ sender, content })
    });
  };
}

export default Chat;
