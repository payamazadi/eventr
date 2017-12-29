import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { fonts, colors } from "shared";

export default props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.defaultFamily,
	  color: colors.blue,
    fontSize: 15,
    backgroundColor: "transparent",
    fontWeight: "bold"
  }
});
