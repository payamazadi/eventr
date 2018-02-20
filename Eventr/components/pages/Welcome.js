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
        <View style={styles.container}>
          <Logo />
          <TextTitle>Welcome to Weaver</TextTitle>

          <TextSubtitle style={styles.centerText}>
            It's easy to start, just enter your phone number
          </TextSubtitle>
          <TextCaptionRegular>
            (We are sending you an SMS to verify you)
          </TextCaptionRegular>
          <View style={styles.padded}>
            <PhoneInput onComplete={onFormFilled} />
          </View>
          <View style={styles.padded}>
            {verificationError && (
              <TextCaptionRegular>
                {verificationError.toString()}
              </TextCaptionRegular>
            )}
            <SubmitButton onPress={() => onSubmit()} filled>
              Sign Up
            </SubmitButton>
          </View>
          <View style={styles.padded}>
            <TextLinkRegular>Skip Sign Up and go to Event</TextLinkRegular>
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
