import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { TextInputLabel } from "text";
import { colors } from "shared";

export default props => {
  return (
    <View style={styles.container}>
      <TextInputLabel>{props.label}</TextInputLabel>
      <TextInput style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  textInput: {
    height: 40,
    width: 327,
    backgroundColor: colors.white,
    borderRadius: 3,
    margin: 5,
    padding: 5,
    textAlign: "left"
  }
});
