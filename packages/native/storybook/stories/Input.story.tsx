import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ConfirmationInput from '../../src/components/registration/ConfirmationInput';
import DateInput from '../../src/components/DateInput';
import {AppDecorator} from '../decorators';
import {H1, H2, Text, Button, Item, Input, Label, Content, Form, Body, Icon} from 'native-base';

storiesOf('Input', module)
  .addDecorator(AppDecorator)
  .add('Confirmation Input', () => (
    <ConfirmationInput tokenLength={6} onComplete={token => console.log(token)} />
  ))
  .add('Date Input', () => <DateInput label='Start' onFormChange={() => {}} />)
  .add('regular with floating label', () => (
    <Item regular floatingLabel>
      <Label style={{color: 'white'}}>Phone Number</Label>
      <Input onChangeText={() => {}} value='' />
    </Item>
  ))
  .add('underline with floating label', () => (
    <Item floatingLabel underline>
      <Label style={{padding: 4}}>
        <Text style={{color: 'black'}}>Event Name</Text>
      </Label>
      <Input style={{color: 'black'}} onChangeText={() => {}} />
    </Item>
  ))
  .add('icon input', () => (
    <Item regular>
      <Input placeholder='Icon Textbox' />
      <Icon active name='home' />
    </Item>
  ));
