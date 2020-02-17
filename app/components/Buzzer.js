import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-elements";

export default class Buzzer extends React.Component {
  state = {
    winner: "Kuyuhyeon Choi",
    clickCount: 0,
    timeLimit: 30000,
    timeLeft: 30000,
    progress: 0,
    open: true,
    value: new Animated.Value(0),
    position: new Animated.ValueXY({ x: 0, y: 0 })
  };

  componentDidMount() {
    this.intervalId = setInterval(this._updateProgress, 10);
    this._moveY();
  }

  _moveY() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 50 },
      friction: 2,
      tension: 100
    }).start();
  }

  _getStyle() {
    return {
      width: 250,
      height: 350,
      transform: [{ translateY: this.state.position.y }]
    };
  }

  render() {
    return (
      <LinearGradient
        colors={["#91EAE4", "#86A8E7", "#7F7FD5"]}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <TouchableOpacity style={{ backgroundColor: "transparent" }}>
          <Card
            containerStyle={{
              width: 250,
              height: 250,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
              borderRadius: 124,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.1)"
            }}
          >
            <Animated.View style={this._getStyle()}>
              <Image
                source={require("../assets/images/monsterBall.png")}
                style={{ width: 250, height: 250 }}
              ></Image>
            </Animated.View>
          </Card>
        </TouchableOpacity>
        <Text>{this._getTimer()}</Text>
      </LinearGradient>
    );
  }

  _renderLastUser() {
    return "Kyuhyeon Choi";
  }

  _getProgress() {
    return this.state.progress;
  }

  _updateProgress() {
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
  }

  _resetProgress() {
    if (this.state.open) {
      this.setState({
        clickCount: this.state.clickCount + 1,
        timeLimit: this.state.timeLimit * 0.8,
        timeLeft: this.state.timeLimit * 0.8,
        progress: 0
      });
    }
  }

  _getImage() {
    if (this.state.open) {
      return buzzerImage;
    } else {
      return coinImage;
    }
  }

  _getTimer() {
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
