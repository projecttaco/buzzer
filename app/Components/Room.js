import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Buzzer from "./Buzzer";

export default class Room extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Buzzer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
