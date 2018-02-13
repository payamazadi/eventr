import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { fonts, colors } from "shared";

export default props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.defaultFamily,
    color: colors.white,
    fontSize: 25,
    backgroundColor: colors.transparent,
    fontWeight: "bold",
    margin: 4
  }
});
