import React from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

export default class PhoneInput extends React.Component {
  autoAdvance(text, nextField) {
    if (text.length === 1) {
      this.refs[nextField].focus();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="input1"
          keyboardType="numeric"
          style={styles.confirmationInput}
          onChangeText={text => {
            this.autoAdvance(text, "input2");
          }}
        />
        <TextInput
          ref="input2"
          keyboardType="numeric"
          style={styles.confirmationInput}
          onChangeText={text => {
            this.autoAdvance(text, "input3");
          }}
        />
        <TextInput
          ref="input3"
          keyboardType="numeric"
          style={styles.confirmationInput}
          onChangeText={text => {
            this.autoAdvance(text, "input4");
          }}
        />
        <TextInput
          ref="input4"
          keyboardType="numeric"
          style={styles.confirmationInput}
          onChangeText={text => {
            this.autoAdvance(text, "input5");
          }}
        />
        <TextInput
          ref="input5"
          keyboardType="numeric"
          style={styles.confirmationInput}
          maxLength={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  confirmationInput: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 3,
    margin: 5,
    padding: 5,
    textAlign: "center"
  }
});
