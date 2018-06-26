import React from "react";
import { StyleSheet, View } from "react-native";
import { TextEventDate, TextRegular } from "text";
import FontAwesome, { Icons } from "react-native-fontawesome";

export default props => {
  const { startTime, endTime } = props;
  return (
    <View>
      <View style={styles.dateRow}>
        <View style={styles.dateIcon}>
          <TextRegular>
            <FontAwesome>{Icons.calendarO}</FontAwesome>
          </TextRegular>
        </View>
        <TextEventDate>{startTime}</TextEventDate>
      </View>

      <View style={styles.dateRow}>
        <View style={styles.dateIcon}>
          <TextRegular>
            <FontAwesome style={styles.dateIcon}>
              {Icons.longArrowDown}
            </FontAwesome>
          </TextRegular>
        </View>
        <TextEventDate>{endTime}</TextEventDate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateRow: {
    flexDirection: "row",
    paddingBottom: 2
  },
  dateIcon: {
    width: 16,
    marginRight: 8,
    alignItems: "center"
  }
});
