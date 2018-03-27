import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class ConfirmationInput extends React.Component {
  state = { part1: "", part2: "", part3: "", part4: "" };
  autoAdvance(text, nextField) {
    if (text.length === 1) {
      this.refs[nextField].focus();
    }
  }
  onFormFilled(text, action) {
    const token =
      this.state.part1 +
      this.state.part2 +
      this.state.part3 +
      this.state.part4 +
      text;
    action(token);
  }
  render() {
    const { onComplete } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          ref="input1"
          keyboardType="numeric"
          style={styles.confirmationInput}
          onChangeText={text => {
            this.setState({ part1: text });
            this.autoAdvance(text, "input2");
          }}
        />
        <TextInput
          ref="input2"
          keyboardType="numeric"
          style={styles.confirmationInput}
          onChangeText={text => {
            this.setState({ part2: text });
            this.autoAdvance(text, "input3");
          }}
        />
        <TextInput
          ref="input3"
          keyboardType="numeric"
          style={styles.confirmationInput}
          onChangeText={text => {
            this.setState({ part3: text });
            this.autoAdvance(text, "input4");
          }}
        />
        <TextInput
          ref="input4"
          keyboardType="numeric"
          style={styles.confirmationInput}
          onChangeText={text => {
            this.setState({ part4: text });
            this.autoAdvance(text, "input5");
          }}
        />
        <TextInput
          ref="input5"
          keyboardType="numeric"
          style={styles.confirmationInput}
          maxLength={1}
          onChangeText={text => {
            this.onFormFilled(text, onComplete);
          }}
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
