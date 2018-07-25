import React from 'react'; // eslint-disable-line no-unused-vars
import {StyleSheet, View} from 'react-native';
import {colors} from '../../shared/';

export default function Header({children}) {
  return <View style={styles.header}>{children}</View>;
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 88,
    width: '100%',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.white,
    marginTop: 16
  }
});
