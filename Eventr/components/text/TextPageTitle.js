import React from "react";
import { StyleSheet, Text } from "react-native";

import { fonts, colors } from "shared";

export default props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.defaultFamily,
    color: colors.blue,
    fontSize: 15,
    backgroundColor: colors.transparent,
    fontWeight: "bold"
  }
});
