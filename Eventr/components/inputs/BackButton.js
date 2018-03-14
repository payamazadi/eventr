import React from "react";
import { StyleSheet } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

import { TextHeading1 } from "text";
import { colors } from "shared";

export default props => {
  const { onClick } = props;
  return (
    <TextHeading1>
      <FontAwesome style={{ fontSize: 52 }}>
        {Icons.chevronCircleLeft}
      </FontAwesome>
    </TextHeading1>
  );
};
