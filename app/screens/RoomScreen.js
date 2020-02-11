import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity
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
        <TouchableOpacity style={{ backgroundColor: "transparent" }}>
          <Card
            containerStyle={{
              width: 250,
              height: 250,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
              borderRadius: 500,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.1)"
            }}
          >
            <Image
              source={require("../assets/images/monsterBall.png")}
              style={{ width: 250, height: 250 }}
            ></Image>
          </Card>
        </TouchableOpacity>
        <View style={styles.container}>
          <ScrollView>
            <Text>ChatScreen</Text>
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/img/tiny_logo.png",
                width: 64,
                height: 64
              }}
            />
          </ScrollView>
        </View>
      </LinearGradient>
    );
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
