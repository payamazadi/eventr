import React from "react"; // eslint-disable-line no-unused-vars
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo";
import { colors } from "shared";

export default props => {
  const visibilityStyle = props.show ? {} : { display: "none" };
  return (
    <LinearGradient
      colors={colors.gradient}
      style={StyleSheet.flatten([styles.container, visibilityStyle])}
    >
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    opacity: 0.6
  }
});
