import React from 'react'; // eslint-disable-line no-unused-vars
import {TouchableOpacity} from 'react-native';
import FontAwesome, {Icons} from 'react-native-fontawesome';

import {TextHeading1} from '../text/';

export default props => {
  const {onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <TextHeading1>
        <FontAwesome style={{fontSize: 52}}>{Icons.chevronCircleLeft}</FontAwesome>
      </TextHeading1>
    </TouchableOpacity>
  );
};
