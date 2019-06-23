import React from 'react';
import {View, StyleSheet} from 'react-native';
import {H1, H2, Text, Button, Item, Input, Label, Content, Form, Body} from 'native-base';

import Page from '../Page';

export default () => {
  return (
    <Page title='Beach Trip Really Long Name'>
      <View style={styles.wrapper}>
        <Text>hiiiiiiiiiiiiiiiiiiiiiiiiiii</Text>
      </View>
    </Page>
  );
};

const styles = {
  wrapper: {
    backgroundColor: 'rgba(255,255,255,.24)',
    padding: 8,
    width: '100%'
  }
};
