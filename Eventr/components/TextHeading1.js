import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class TextHeading1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1 style={styles.h1}>Heading 1</Text>
	/*
          ref="input3"
          keyboardType="numeric"
          style={styles.phoneInputLong}
          maxLength={4}
        />
	*/
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
	color: red;
  }
});
