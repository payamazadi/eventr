import React from 'react'; // eslint-disable-line no-unused-vars
import {StyleSheet, TouchableOpacity} from 'react-native';
import {TextSubmitLabel} from '../text/';
import {colors} from '../../shared/';

export default props => {
  const {overwriteStyles} = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.filled ? styles.button_filled : styles.button_empty,
        overwriteStyles
      ]}
      onPress={props.onPress}>
      <TextSubmitLabel>{props.children}</TextSubmitLabel>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_filled: {
    backgroundColor: colors.orange
  },
  button_empty: {
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.transparent
  }
});
