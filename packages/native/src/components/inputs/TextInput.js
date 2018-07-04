import React from 'react'; // eslint-disable-line no-unused-vars
import {StyleSheet, TextInput, View} from 'react-native';
import {TextInputLabel} from '../text/';
import {colors} from '../../shared/';
export default props => {
  const {onChange, label, placeholder, value} = props;
  return (
    <View style={styles.container}>
      <TextInputLabel>{label}</TextInputLabel>
      <TextInput
        onChangeText={text => onChange(text)}
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  textInput: {
    height: 40,
    width: 327,
    backgroundColor: colors.white,
    borderRadius: 3,
    margin: 5,
    padding: 5,
    textAlign: 'left'
  }
});
