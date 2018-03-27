import React from "react";
import { StyleSheet, View } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

import { TextHeading1 } from "text";
import { colors } from "shared";

export default props => {
  const { onClick } = props;
  return (
    <View style={styles.pencilBorder}>
      <TextHeading1>
        <FontAwesome style={styles.pencil}>{Icons.pencil}</FontAwesome>
      </TextHeading1>
    </View>
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
