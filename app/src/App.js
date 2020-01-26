import React, { Component } from "react";

import "antd/dist/antd.css";
import "./App.css";

// import Loader from "Components/Loader";
import Room from "./Components/Room";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Room />;
  }
}

export default App;
