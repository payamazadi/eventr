import React from 'react'; // eslint-disable-line no-unused-vars
import {StyleSheet, View} from 'react-native';

import {colors} from '../../shared/';

export default props => {
  return <View style={styles.transparentWhiteBox}>{props.children}</View>;
};

const styles = StyleSheet.create({
  transparentWhiteBox: {
    backgroundColor: colors.quarterWhite,
    padding: 6,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 4,
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
