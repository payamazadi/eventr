import * as React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import variables from '../native-base-theme/variables/platform';
interface Props {
  onComplete(token: string): void;
  tokenLength: number;
}

export default class ConfirmationInput extends React.Component<Props> {
  autoAdvance(text, nextField) {
    if (text.length === 1) {
      const field: any = this.refs[nextField];
      field.focus();
    }
  }

  onFormFilled(text, action) {
    const token = Object.values(this.state).join('') + text;
    action(token);
  }
  render() {
    const {onComplete, tokenLength} = this.props;
    const tokenInputs = [];
    for (let i = 1; i <= tokenLength; i++) {
      tokenInputs.push(
        <TextInput
          maxLength={1}
          key={`input${i}`}
          ref={`input${i}`}
          keyboardType='numeric'
          style={styles.confirmationInput}
          onChangeText={text => {
            const newstate = {};
            newstate[`part${i}`] = text;
            this.setState(newstate);
            if (i === tokenLength && text.length === 1) {
              this.onFormFilled(text, onComplete);
            } else {
              this.autoAdvance(text, `input${i + 1}`);
            }
          }}
        />
      );
    }
    return <View style={styles.container}>{tokenInputs}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  confirmationInput: {
    height: 56,
    width: 40,
    margin: 5,
    padding: 5,
    fontSize: variables.inputFontSize,
    borderColor: '#F79D19',
    borderBottomWidth: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
    color: 'white',
    textAlign: 'center'
  }
});
