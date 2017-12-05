import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { colors } from "shared";

export default props => {
  return (
    <TouchableOpacity style={[styles.button, props.filled? styles.button_filled:styles.button_empty]} onPress={props.onPress}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  button_filled: {
    backgroundColor: colors.orange
  },
  button_empty: {
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.transparent
  },
  text: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 15
  }
});
