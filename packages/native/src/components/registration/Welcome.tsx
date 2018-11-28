import React from 'react';
import {ApolloError} from 'apollo-client';
import {View, StyleSheet} from 'react-native';

import {H1, H2, Text, Button, Item, Input, Label, Content, Form, Body} from 'native-base';
// import { withNavigation, NavigationInjectedProps } from 'react-navigation';

import Page from '../Page';
import Logo from '../Logo';
import Br from '../Br';

interface Props {
  isVerifyingPhone: boolean;
  verificationError?: ApolloError;
  handleSubmit(): void;
  handleChange(text: string): void;
  phone?: string;
}

export default ({phone, handleChange, handleSubmit}: Props) => {
  return (
    <Page title="welcome" hideNavigation>
      <View style={styles.content}>
        <Logo />
        <H1>Welcome to Weaver</H1>
        <H2 style={{textAlign: 'center'}}>Linking your events for a better experience</H2>
        <Br />
        <Item regular floatingLabel>
          <Label style={{color: 'white'}}>Phone Number</Label>
          <Input onChangeText={handleChange} value={phone} />
        </Item>
        <Br />
        <Text>(we are sending you an SMS to verify you)</Text>
        <Br />
        <View>
          <Button warning onPress={handleSubmit} rounded>
            <Text>SIGN UP FOR WEAVER</Text>
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
