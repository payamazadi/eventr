import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo";

import { TransparentOverlay, Header, FullWidthBorder } from "wrappers";
import { TextHeading1 } from "text";
import { colors } from "shared";
import { BackButton, SubmitButton, TextInput, DatePicker } from "inputs";

export default class EventEdit extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { isLoadingEvent, backAction, eventData, onFormChange } = this.props;

    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <Header>
            <BackButton onPress={backAction} />
            <TextHeading1>Event</TextHeading1>
            <View />
          </Header>
          <View style={styles.body}>
            <TextInput
              label={"EVENT NAME"}
              placeholder={"Name your event"}
              value={eventData.name}
              onChange={text => onFormChange({ name: text })}
            />

            <TextInput
              label={"DESCRIPTION"}
              placeholder={"What's it about"}
              value={eventData.description}
            />

            <TextInput
              label={"LOCATION"}
              placeholder={"Event Location"}
              value={eventData.location}
            />
          </View>
          <FullWidthBorder>
            <DatePicker label={"STARTS"} />
          </FullWidthBorder>
          <FullWidthBorder>
            <DatePicker label={"ENDS"} />
          </FullWidthBorder>
          <View style={styles.footer}>
            <SubmitButton filled>Add Event</SubmitButton>
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
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 88,
    width: "100%",
    borderTopWidth: 2,
    borderStyle: "solid",
    borderColor: colors.white,
    marginTop: 16,
    position: "absolute",
    bottom: 0,
    paddingBottom: 10
  }
});
