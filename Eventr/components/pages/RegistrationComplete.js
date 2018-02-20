import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient, Font } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";
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

export default class RegistrationComplete extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { onSubmit, isVerifyingPhone } = this.props;

    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <Logo />
          <TextTitle>You're In!</TextTitle>

          <TextSubtitle style={styles.centerText}>
            Let's begin planning your first event
          </TextSubtitle>

          <View style={styles.padded}>
            <SubmitButton onPress={() => onSubmit()} filled>
              Next
            </SubmitButton>
          </View>
        </View>
        <TransparentOverlay show={isVerifyingPhone} />
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
