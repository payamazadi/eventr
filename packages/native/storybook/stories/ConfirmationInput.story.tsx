import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ConfirmationInput from '../../src/components/registration/ConfirmationInput';
import {AppDecorator} from '../decorators';

storiesOf('ConfirmationInput', module)
  .addDecorator(AppDecorator)
  .add('default view', () => (
    <ConfirmationInput tokenLength={6} onComplete={token => console.log(token)} />
  ));
