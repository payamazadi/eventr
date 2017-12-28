import React from "react";
import { StyleSheet, View, Text, Picker, Platform } from "react-native";
import {colors} from "shared";
export default props => {
    return <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <Picker mode="dropdown" style={styles.selectInput} itemStyle={styles.selectItems}>
          <Picker.Item label="Shopping" />
          <Picker.Item label="Packing" />
          <Picker.Item label="Something" />
        </Picker>
      </View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  label: {
    backgroundColor: "transparent",
    color: colors.white,
    paddingLeft: 4
  },
  selectInput: {
    backgroundColor: colors.white,
    borderRadius: 3,
    width: 327,
    height: Platform.OS === "ios" ? 80 : 40
  },
  selectItems: {
    height: Platform.OS === "ios" ? 80 : 40
  }
});
