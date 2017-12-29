import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";

import { PhoneInput, ConfirmationInput, SubmitButton, TextInput, SelectInput} from "inputs";
import { TextHeading1, TextCaptionNormal } from "text";
import { colors } from "shared";


export default class App extends React.Component {
  render() {
    return <LinearGradient colors={colors.gradient} style={styles.gradient}>  
        <View style={styles.container}>
          <TextHeading1>Welcome to Weaver</TextHeading1>
          <PhoneInput />
          <ConfirmationInput />
          <SubmitButton onPress={() => Alert.alert("Next!")} filled>
            Confirm
          </SubmitButton>
          <SubmitButton onPress={() => Alert.alert("Next!")} >
            Events around me
          </SubmitButton>
          <TextInput label="LIST NAME"/>
          <SelectInput label="TYPE"/>
        </View>
      </LinearGradient>;
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "blue"
  },
  gradient: {
    height: "100%",
    width: "100%"
  },
  international: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "purple",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  }
});
