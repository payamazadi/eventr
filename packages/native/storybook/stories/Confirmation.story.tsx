import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Confirmation from '../../src/components/registration/Confirmation';
import {FontDecorator} from '../decorators';

storiesOf('Confirmation', module)
  .addDecorator(FontDecorator)
  .add('default view', () => (
    <Confirmation handleSubmit={() => {}} handleChange={() => {}} isVerifyingToken token="" />
  ));
