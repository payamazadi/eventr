import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo";

import { Container, Header, Content, Badge } from "native-base";
import { TransparentOverlay } from "wrappers";
import { Logo } from "common";
import { PhoneInput, SubmitButton } from "inputs";
import {
  TextTitle,
  TextSubtitle,
  TextCaptionRegular,
  TextLinkRegular
} from "text";
import { colors } from "shared";

export default class Welcome extends React.Component {
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
