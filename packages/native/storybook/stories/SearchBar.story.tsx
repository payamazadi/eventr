import React from 'react';
import {storiesOf} from '@storybook/react-native';
import SearchBar from '../../src/components/SearchBar';
import {AppDecorator} from '../decorators';
import {Text, Alert} from 'react-native';

storiesOf('SearchBar', module)
  .addDecorator(AppDecorator)
  .add('standard', () => <SearchBar value='' onChangeText={() => {}} />);
