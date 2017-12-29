import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fonts, colors } from "shared";

export default props => {
  return (
      <Text style={styles.text}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  text:{
    color: colors.white,
    fontWeight: "600",
    fontSize: 15
  }
});
