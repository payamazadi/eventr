import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../shared/';

export default class PhoneInput extends React.Component {
  state = {phoneNumberPart1: '', phoneNumberPart2: ''};

  autoAdvance(text, nextField) {
    if (text.length === 3) {
      this.refs[nextField].focus();
    }
  }

  onFormFilled(text, action) {
    if (text.length === 4) {
      const phoneNumber = this.state.phoneNumberPart1 + this.state.phoneNumberPart2 + text;
      action(phoneNumber);
    }
  }
  render() {
    const {onComplete} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          ref="input1"
          keyboardType="numeric"
          style={styles.phoneInput}
          onChangeText={text => {
            this.setState({phoneNumberPart1: text});
            this.autoAdvance(text, 'input2');
          }}
        />
        <TextInput
          ref="input2"
          keyboardType="numeric"
          style={styles.phoneInput}
          onChangeText={text => {
            this.setState({phoneNumberPart2: text});
            this.autoAdvance(text, 'input3');
          }}
        />
        <TextInput
          ref="input3"
          keyboardType="numeric"
          style={[styles.phoneInput, styles.phoneInput_Long]}
          maxLength={4}
          onChangeText={text => {
            this.onFormFilled(text, onComplete);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  phoneInput: {
    height: 40,
    width: 60,
    backgroundColor: colors.white,
    borderRadius: 3,
    margin: 5,
    padding: 5,
    textAlign: 'center'
  },
  phoneInput_Long: {
    width: 80
  }
});
