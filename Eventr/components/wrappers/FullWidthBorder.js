import React from "react"; // eslint-disable-line no-unused-vars
import { StyleSheet, View } from "react-native";

import { colors } from "shared";

export default props => {
  const { customStyles } = props;
  return (
    <View style={[styles.fullWidthBorder, customStyles]}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  fullWidthBorder: {
    borderColor: colors.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 16,
    paddingLeft: 10,
    paddingRight: 10,

    marginTop: -1,
    minHeight: 40,
    width: "100%"
  }
});
