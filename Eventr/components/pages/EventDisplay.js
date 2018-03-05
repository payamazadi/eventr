import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo";
import { TransparentOverlay } from "wrappers";

import { TextHeading3, TextCaptionRegular } from "text";
import { colors } from "shared";

export default class EventDisplay extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { isLoadingEvent, eventData } = this.props;

    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <TextHeading3>
            Beach Trip <TextCaptionRegular>(Private)</TextCaptionRegular>
          </TextHeading3>
        </View>
        <TransparentOverlay show={isLoadingEvent} />
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
