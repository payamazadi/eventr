import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Welcome from '../../src/components/registration/Welcome';
import {AppDecorator} from '../decorators';

storiesOf('Welcome', module).add('default view', () => (
  <Welcome isVerifyingPhone handleSubmit={() => {}} handleChange={() => {}} />
));
