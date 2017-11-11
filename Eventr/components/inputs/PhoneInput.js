import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class PhoneInput extends React.Component {
  autoAdvance(text, nextField) {
    if (text.length === 3) {
      this.refs[nextField].focus();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="input1"
          style={styles.phoneInput}
          onChangeText={text => {
            this.autoAdvance(text, "input2");
          }}
        />
        <TextInput
          ref="input2"
          style={styles.phoneInput}
          onChangeText={text => {
            this.autoAdvance(text, "input3");
          }}
        />
        <TextInput ref="input3" style={styles.phoneInputLong} maxLength={4} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  phoneInput: {
    height: 40,
    width: 60,
    backgroundColor: "white",
    borderRadius: 3,
    margin: 5,
    padding: 5,
    textAlign: "center"
  },
  phoneInputLong: {
    height: 40,
    width: 80,
    backgroundColor: "white",
    borderRadius: 3,
    margin: 5,
    padding: 5,
    textAlign: "center"
  }
});
