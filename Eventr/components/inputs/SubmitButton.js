import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { colors } from "shared";

export default props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orange,
    borderRadius: 8,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 15
  }
});
