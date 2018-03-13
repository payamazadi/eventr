import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";

import { TransparentOverlay } from "wrappers";
import { TextTitle, TextHeading1, TextCaptionRegular, TextRegular } from "text";
import { colors } from "shared";

export default class EventDisplay extends React.Component {
  static navigationOptions = { header: null };

  state = { fontLoaded: false };

  render() {
    const { isLoadingEvent, eventData } = this.props;

    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TextHeading1>
              <FontAwesome style={{ fontSize: 52 }}>
                {Icons.chevronCircleLeft}
              </FontAwesome>
            </TextHeading1>
            <TextHeading1>Event</TextHeading1>
            <View style={styles.addButtonBorder}>
              <TextHeading1>
                <FontAwesome style={styles.addButton}>{Icons.plus}</FontAwesome>
              </TextHeading1>
            </View>
          </View>
          <View style={styles.body}>
            <TextHeading1>
              Beach Trip <TextCaptionRegular>(Private)</TextCaptionRegular>
            </TextHeading1>
          </View>
        </View>
        <TransparentOverlay show={isLoadingEvent} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: { height: "100%", width: "100%" },
  gradient: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 88,
    width: "100%",
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: colors.white,
    marginTop: 16
  },
  body: { margin: 16 },
  centerText: {
    textAlign: "center"
  },
  padded: {
    margin: 12
  },
  addButtonBorder: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: colors.linkBlue,
    borderRadius: 100,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 10
  },
  addButton: {
    color: colors.linkBlue,
    fontSize: 28
  }
});
