import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { LinearGradient, Font } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";

import {
  PhoneInput,
  ConfirmationInput,
  SubmitButton,
  TextInput,
  SelectInput
} from "inputs";
import {
  TextTitle,
  TextSubtitle,
  TextHeading1,
  TextHeading2,
  TextHeading3,
  TextCaptionRegular,
  TextRegular,
  TextLinkRegular,
  TextPageTitle
} from "text";
import { colors } from "shared";
import { Drawer } from "wrappers";

export default class Home extends React.Component {
    static navigationOptions = { header: null };

    render() {
    return <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container} ><TextTitle>Home Screen</TextTitle></View>
        </LinearGradient>;
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
