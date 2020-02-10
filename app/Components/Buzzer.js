import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
  StatusBar
} from "react-native";

export default class Room extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
        />
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
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
