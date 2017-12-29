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
    backgroundColor:colors.transparent,
    color: colors.white,
    paddingLeft: 4
  },
});
