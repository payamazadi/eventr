import React from 'react'; // eslint-disable-line no-unused-vars
import {StyleSheet, Text} from 'react-native';
import {DateTime} from 'luxon';

import {fonts, colors} from '../../shared/';

const DATE_FORMAT = {
  ...DateTime.DATE_SHORT,
  ...DateTime.TIME_SIMPLE
};

const TextEventDate = props => {
  const text = DateTime.fromISO(props.children).toLocaleString(props.dateFormat);

  return <Text style={styles.text}>{text}</Text>;
};

export default TextEventDate;

TextEventDate.defaultProps = {
  dateFormat: DATE_FORMAT
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.defaultFamily,
    color: colors.white,
    fontSize: 13,
    backgroundColor: colors.transparent
  }
});
