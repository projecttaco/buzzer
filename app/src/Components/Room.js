import React, { Component } from "react";
import { Layout, PageHeader } from "antd";
import Chat from "./Chat";
import Buzzer from "./Buzzer";

import "./css/Room.css";

class Room extends Component {
  render() {
    return (
      <Layout>
        <PageHeader
          style={{
            backgroundColor: "#b2c7d9",
            textAlign: "center",
            fontSize: "30px",
            boxShadow: "0px -2px 15px 0px rgba(78,93,107,1)"
          }}
          onBack={() => null}
          title="100KLAY의 주인은?"
        ></PageHeader>
        <div className="Content" style={{ backgroundColor: "#b2c7d9" }}>
          <Buzzer />
          <Chat />
        </div>
      </Layout>
    );
  }
}

export default Room;
