import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";

import {
  TransparentOverlay,
  Header,
  LabeledContent,
  TransparentWhiteBox
} from "wrappers";
import {
  TextTitle,
  TextHeading1,
  TextCaptionRegular,
  TextRegular,
  TextHeading3
} from "text";
import { colors } from "shared";
import { PlusButton, BackButton, SubmitButton, PencilButton } from "inputs";
import { DateRange } from "common";

export default class EventDisplay extends React.Component {
  static navigationOptions = { header: null };

  state = { fontLoaded: false };

  render() {
    const { isLoadingEvent, eventData } = this.props;

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
                Beach Trip <TextRegular>(Private)</TextRegular>
              </TextHeading1>
              <PencilButton />
            </View>
            <LabeledContent label={"DESCRIPTION"}>
              <TextRegular>
                <FontAwesome>{Icons.listAlt}</FontAwesome> Going to beach with
                family
              </TextRegular>
            </LabeledContent>
            <LabeledContent label={"LOCATION"}>
              <TextRegular>
                <FontAwesome>{Icons.mapMarker}</FontAwesome> Hatteras Island, NC
              </TextRegular>
            </LabeledContent>
            <LabeledContent label={"DATE"}>
              <DateRange
                startTime={"2018-03-13T18:12:13-04:00"}
                endTime={"2018-03-13T22:12:13-04:00"}
              />
            </LabeledContent>
            <TransparentWhiteBox>
              <TextRegular>Events are fun with a friend</TextRegular>
              <SubmitButton
                overwriteStyles={{ width: 122, height: 27, borderRadius: 3 }}
                filled
              >
                Let's Add
              </SubmitButton>
            </TransparentWhiteBox>
            <TransparentWhiteBox>
              <TextRegular>Lists (0)</TextRegular>
              <TextRegular>
                <FontAwesome style={{ fontSize: 20 }}>
                  {Icons.chevronCircleRight}
                </FontAwesome>
              </TextRegular>
            </TransparentWhiteBox>
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
  eventTitle: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
