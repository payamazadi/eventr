import React from "react"; // eslint-disable-line no-unused-vars
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

import { TextHeading1 } from "text";
import { colors } from "shared";

export default props => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.addButtonBorder}>
      <TextHeading1>
        <FontAwesome style={styles.addButton}>{Icons.plus}</FontAwesome>
      </TextHeading1>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButtonBorder: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: colors.linkBlue,
    borderRadius: 100,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 10,
    width: 46
  },
  addButton: {
    color: colors.linkBlue,
    fontSize: 28
  }
});
