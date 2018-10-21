import React from 'react';
import {View, StyleSheet} from 'react-native';

import {H1, H2, Text, Button, Icon, Item, Input, Label, Content, Form, Body} from 'native-base';

import Page from '../Page';
import Logo from '../Logo';
import Br from '../Br';

export default ({handleSubmit}) => {
  return (
    <Page hideNavigation>
      <View style={styles.content}>
        <Logo />
        <H1>You're In!</H1>
        <H2>Let's begin planning your first event</H2>
        <Br />

        <View>
          <Button warning onPress={handleSubmit}>
            <Text>Next</Text>
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
