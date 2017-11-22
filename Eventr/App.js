import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";

import PhoneInput from "./components/inputs/PhoneInput";
import TextHeading1 from "./components/text/TextHeading1";

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={["#3023AE", "#5B38B9", "#C86DD7"]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <PhoneInput />
	  <TextHeading1 />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gradient: {
    height: "100%",
    width: "100%"
  }
});
