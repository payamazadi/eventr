import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class TextHeading1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Heading 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
	  color: "red",
    fontSize: "25px",
    backgroundColor: "transparent"
  }
});
