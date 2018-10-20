import React from 'react';
import {ApolloError} from 'apollo-client';
import {View, StyleSheet} from 'react-native';

import {H1, H2, Text, Button, Item, Input, Label, Content, Form, Body} from 'native-base';

import Page from '../Page';
import Logo from '../Logo';
import Br from '../Br';

interface Props {
  handleSubmit(): void;
  handleChange(text: string): void;
  token: string;
  isVerifyingToken: boolean;
  verificationError?: ApolloError;
}

export default ({handleChange, handleSubmit, token}: Props) => {
  return (
    <Page hideNavigation>
      <View style={styles.content}>
        <Logo />
        <H1>Almost There</H1>
        <H2>Enter confirmation code</H2>
        <Br />
        <Item regular floatingLabel>
          <Label style={{color: 'white'}}>Confirmation Code</Label>
          <Input onChangeText={handleChange} value={token} />
        </Item>
        <Br />
        <View>
          <Button warning onPress={handleSubmit}>
            <Text>Confirm</Text>
          </Button>
        </View>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: 20
  }
});
