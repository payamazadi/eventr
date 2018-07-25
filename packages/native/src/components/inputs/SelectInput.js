import React from 'react'; // eslint-disable-line no-unused-vars
import {StyleSheet, View, Picker, Platform} from 'react-native';
import {TextInputLabel} from '../text/';
import {colors} from '../../shared/';

export default props => {
  return (
    <View style={styles.container}>
      <TextInputLabel>{props.label}</TextInputLabel>
      <Picker mode="dropdown" style={styles.selectInput} itemStyle={styles.selectItems}>
        <Picker.Item label="Shopping" />
        <Picker.Item label="Packing" />
        <Picker.Item label="Something" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  selectInput: {
    backgroundColor: colors.white,
    borderRadius: 3,
    width: 327,
    height: Platform.OS === 'ios' ? 80 : 40
  },
  selectItems: {
    height: Platform.OS === 'ios' ? 80 : 40
  }
});
