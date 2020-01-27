import React, { Component } from "react";
import { Progress } from "antd";
import buzzerImage from "../images/monsterBall.png";
import coinImage from "../images/shiba.png";
import "./css/Buzzer.css";

class Buzzer extends Component {
  state = {
    winner: "Kuyuhyeon Choi",
    clickCount: 0,
    timeLimit: 30000,
    timeLeft: 30000,
    progress: 0,
    open: true
  };

  componentDidMount() {
    this.intervalId = setInterval(this.updateProgress, 10);
  }

  componentWillUpdate() {}

  render() {
    return (
      <div className="buzzer-container">
        <div className="buzzer__last-user">{this.renderLastUser()}</div>

        <Progress
          className="buzzer__progress-bar"
          type="circle"
          strokeColor={{
            "0%": "#feca57",
            "100%": "#ee5253"
          }}
          width="60vw"
          percent={this.state.progress}
          showInfo={false}
        />
        <img
          className="buzzer__image"
          src={this.getImage()}
          alt="buzzer"
          onClick={this.resetProgress}
        />

        <div className="buzzer__timer">{this.getTimer()}</div>
      </div>
    );
  }

  renderLastUser = () => {
    return "Kyuhyeon Choi";
  };

  getProgress = () => {
    return this.state.progress;
  };

  updateProgress = () => {
    if (this.state.open) {
      if (this.state.progress < 100) {
        this.setState({
          timeLeft: this.state.timeLeft - 10,
          progress: this.state.progress + 1000 / this.state.timeLimit
        });
      } else {
        this.setState({ timeLeft: 0, open: false });
      }
      clearInterval(this.intervalID);
    }
  };

  resetProgress = () => {
    if (this.state.open) {
      this.setState({
        clickCount: this.state.clickCount + 1,
        timeLimit: this.state.timeLimit * 0.8,
        timeLeft: this.state.timeLimit * 0.8,
        progress: 0
      });
    }
  };

  getImage = () => {
    if (this.state.open) {
      return buzzerImage;
    } else {
      return coinImage;
    }
  };

  getTimer = () => {
    let timer = "00";
    let hh, mm, ss, ms;
    let milli = Math.round((this.state.timeLeft % 1000) / 10);
    let s = Math.round((this.state.timeLeft / 1000) % 60);
    let m = Math.round((this.state.timeLeft / (1000 * 60)) % 60);
    let h = Math.round((this.state.timeLeft / (1000 * 60 * 60)) % 60);
    if (h) {
      hh = h >= 10 ? `${h}` : `0${h}`;
      timer = hh;
    }
    if (m) {
      mm = m >= 10 ? `${m}` : `0${m}`;
      timer = timer + " : " + mm;
    }
    if (s) {
      ss = s >= 10 ? `${s}` : `0${s}`;
      timer = timer + " : " + ss;
    }
    ms = milli >= 10 ? `${milli}` : `0${milli}`;
    timer = timer + " : " + ms;

    return timer;
  };
}

export default Buzzer;
