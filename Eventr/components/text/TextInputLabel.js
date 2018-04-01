import React from "react"; // eslint-disable-line no-unused-vars
import { StyleSheet, Text } from "react-native";
import { colors } from "shared";

export default props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: colors.transparent,
    color: colors.white,
    paddingLeft: 4
  }
});
