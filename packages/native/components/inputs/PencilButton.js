import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

import { TextHeading1 } from "text";
import { colors } from "shared";

export default props => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.pencilBorder} onPress={onPress}>
      <TextHeading1>
        <FontAwesome style={styles.pencil}>{Icons.pencil}</FontAwesome>
      </TextHeading1>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pencilBorder: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 100,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 10,
    width: 46
  },
  pencil: {
    color: colors.white,
    fontSize: 28
  }
});
