import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { fonts } from "shared";

export default props => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: fonts.defaultFamily,
    color: "white",
    fontSize: 12,
    backgroundColor: "transparent"
  }
});
