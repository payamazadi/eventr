import React from 'react';
import {Input, Item, Icon} from 'native-base';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

interface Props {
  onChangeText(text: string): void;
  value: string;
}

export default (props: Props) => (
  <Item style={{backgroundColor: 'white', paddingLeft: 8, borderRadius: 4}}>
    <Icon style={{color: '#66C0F0', fontSize: 38}} name='search' />

    <Input
      placeholder='Event Search'
      placeholderTextColor='#C7C7CD'
      style={{fontSize: 24, color: 'black'}}
      {...props}
    />
  </Item>
);
