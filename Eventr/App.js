import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";


import { PhoneInput, SubmitButton } from "inputs";
import { TextHeading1 } from "text";
import { colors } from "shared";

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={colors.gradient}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <TextHeading1 text="Welcome to Weaver" />
          <PhoneInput />
          <SubmitButton onPress = {() => Alert.alert("Next!")} />
        </View>
      </LinearGradient>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gradient: {
    height: "100%",
    width: "100%"
  }
});
