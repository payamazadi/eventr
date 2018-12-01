import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ConfirmationInput from '../../src/components/inputs/ConfirmationInput';
import {AppDecorator} from '../decorators';

storiesOf('ConfirmationInput', module)
  .addDecorator(AppDecorator)
  .add('default view', () => <ConfirmationInput onComplete={() => {}} />);
