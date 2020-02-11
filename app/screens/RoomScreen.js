import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Buzzer extends React.Component {
  state = {
    winner: "Kuyuhyeon Choi",
    clickCount: 0,
    timeLimit: 30000,
    timeLeft: 30000,
    progress: 0,
    open: true
  };

  componentDidMount() {}

  render() {
    return (
      <LinearGradient
        colors={["#91EAE4", "#86A8E7", "#7F7FD5"]}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.container}></View>
        <View style={styles.container}></View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
