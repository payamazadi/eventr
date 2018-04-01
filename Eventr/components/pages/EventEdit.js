import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo";

import { TransparentOverlay, Header } from "wrappers";
import { TextHeading1 } from "text";
import { colors } from "shared";
import { BackButton, SubmitButton, TextInput, DatePicker } from "inputs";

export default class EventEdit extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { isLoadingEvent, eventData } = this.props;

    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <Header>
            <BackButton />
            <TextHeading1>Event</TextHeading1>
            <View />
          </Header>
          <View style={styles.body}>
            <TextInput label={"EVENT NAME"} />

            <TextInput label={"DESCRIPTION"} />

            <TextInput label={"LOCATION"} />

            <DatePicker mode="date" label={"DATE"} />
            <DatePicker mode="time" label={"START"} />
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
