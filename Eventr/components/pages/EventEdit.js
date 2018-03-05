import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo";
import { TransparentOverlay } from "wrappers";

import { SubmitButton } from "inputs";
import { TextTitle, TextSubtitle, TextCaptionRegular } from "text";
import { colors } from "shared";

export default class EventEdit extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const {
      onSubmit,
      isVerifyingPhone,
      onFormFilled,
      verificationError
    } = this.props;

    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container} />
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
  },

  centerText: {
    textAlign: "center"
  },
  padded: {
    margin: 12
  }
});
