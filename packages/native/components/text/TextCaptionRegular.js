import React from "react"; // eslint-disable-line no-unused-vars
import { StyleSheet, Text } from "react-native";

import { fonts, colors } from "shared";

export default props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.defaultFamily,
    color: colors.white,
    fontSize: 12,
    backgroundColor: colors.transparent
  }
});
