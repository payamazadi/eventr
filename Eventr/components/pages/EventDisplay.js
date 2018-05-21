import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";

import {
  TransparentOverlay,
  Header,
  LabeledContent,
  FullWidthBorder
} from "wrappers";
import { TextHeading1, TextRegular } from "text";
import { colors } from "shared";
import { PlusButton, BackButton, SubmitButton, PencilButton } from "inputs";
import { DateRange } from "common";

export default class EventDisplay extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { isLoadingEvent, eventData, editButtonAction } = this.props;

    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <Header>
            <BackButton />
            <TextHeading1>Event</TextHeading1>
            <PlusButton />
          </Header>
          <View style={styles.body}>
            <View style={styles.eventTitle}>
              <TextHeading1>
                {eventData.name} <TextRegular>(Private)</TextRegular>
              </TextHeading1>
              <PencilButton onPress={editButtonAction} />
            </View>
            <LabeledContent label={"DESCRIPTION"}>
              <TextRegular>
                <FontAwesome>{Icons.listAlt}</FontAwesome>{" "}
                {eventData.description}
              </TextRegular>
            </LabeledContent>
            <LabeledContent label={"LOCATION"}>
              <TextRegular>
                <FontAwesome>{Icons.mapMarker}</FontAwesome>{" "}
                {eventData.location}
              </TextRegular>
            </LabeledContent>
            <LabeledContent label={"DATE"}>
              <DateRange startTime={eventData.start} endTime={eventData.end} />
            </LabeledContent>
          </View>
          <FullWidthBorder customStyles={styles.fullWidthBorderStyle}>
            <TextRegular>Events are fun with a friend</TextRegular>
            <SubmitButton
              overwriteStyles={{ width: 122, height: 27, borderRadius: 3 }}
              filled
            >
              Let's Add
            </SubmitButton>
          </FullWidthBorder>
          <FullWidthBorder customStyles={styles.fullWidthBorderStyle}>
            <TextRegular>Lists (0)</TextRegular>
            <TextRegular>
              <FontAwesome style={{ fontSize: 20 }}>
                {Icons.chevronCircleRight}
              </FontAwesome>
            </TextRegular>
          </FullWidthBorder>
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
  eventTitle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  fullWidthBorderStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
