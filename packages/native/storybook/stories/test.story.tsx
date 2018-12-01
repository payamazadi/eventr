import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Text} from 'react-native';
import {AppDecorator} from '../decorators';

storiesOf('test', module)
  .addDecorator(AppDecorator)
  .add('default view', () => <Text>Hello Other Thing </Text>);
