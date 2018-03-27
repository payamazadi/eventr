import React from "react";
import FontAwesome, { Icons } from "react-native-fontawesome";

import { TextHeading1 } from "text";

export default props => {
  const { onPress } = props;
  return (
    <TextHeading1 onPress={onPress}>
      <FontAwesome style={{ fontSize: 52 }}>
        {Icons.chevronCircleLeft}
      </FontAwesome>
    </TextHeading1>
  );
};
