import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LinearGradient} from 'expo';

import {TextTitle} from '../text/';
import {colors} from '../../shared/';

export default class Home extends React.Component {
  static navigationOptions = {header: null};

  render() {
    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <TextTitle>Home Screen</TextTitle>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradient: {
    height: '100%',
    width: '100%'
  }
});
