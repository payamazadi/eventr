import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { fonts } from "shared";

export default class TextHeading1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: fonts.defaultFamily,
	  color: "red",
    fontSize: "25px",
    backgroundColor: "transparent"
  }
});
