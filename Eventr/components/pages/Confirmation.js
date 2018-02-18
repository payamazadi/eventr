import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient, Font } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { Container, Header, Content, Badge } from "native-base";
import { TransparentOverlay } from "wrappers";
import { ConfirmationInput, SubmitButton } from "inputs";
import { TextTitle, TextSubtitle } from "text";
import { colors } from "shared";
import { Logo } from "common";

export default class Confirmation extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { onSubmit, isVerifyingToken } = this.props;

    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <Logo />
          <TextTitle>Almost There</TextTitle>

          <TextSubtitle style={styles.centerText}>
            Enter Confirmation Code
          </TextSubtitle>
          <View style={styles.padded}>
            <ConfirmationInput />
          </View>
          <View style={styles.padded}>
            <SubmitButton onPress={() => onSubmit()} filled>
              Confirm
            </SubmitButton>
          </View>
        </View>
        <TransparentOverlay show={isVerifyingToken} />
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
