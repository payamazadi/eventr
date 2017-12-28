import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import {colors} from "shared";
export default props => {
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          style={styles.textInput}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  label:{
    backgroundColor:"transparent",
    color: colors.white,
    paddingLeft: 4
  },
  textInput: {
    height: 40,
    width: 327,
    backgroundColor: "white",
    borderRadius: 3,
    margin: 5,
    padding: 5,
    textAlign: "left"
  }
});
