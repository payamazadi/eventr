import React from "react";
import { StyleSheet, Button } from "react-native";

import Colors from "../../shared/colors";

export default props => {
  return (
    <Button overrides={{ backgroundColor: Colors.orange }} title="Submit" />
  );
};

const styles = {
  button: {
    backgroundColor: Colors.orange,
    borderRadius: 8,
    width: 200,
    height: 40
  }
};
