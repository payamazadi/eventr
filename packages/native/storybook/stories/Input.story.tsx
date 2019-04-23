import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ConfirmationInput from '../../src/components/registration/ConfirmationInput';
import DateInput from '../../src/components/DateInput';
import {AppDecorator} from '../decorators';

storiesOf('Input', module)
  .addDecorator(AppDecorator)
  .add('Confirmation Input', () => (
    <ConfirmationInput tokenLength={6} onComplete={token => console.log(token)} />
  ))
  .add('Date Input', () => <DateInput label="Start" onFormChange={() => {}} />);
