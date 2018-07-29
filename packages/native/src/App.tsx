import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Font} from 'expo';

import {ApolloProvider} from 'react-apollo';

import client from './ApolloClient';
import {Navigator} from './Navigator';

const fontAwesome = require('../assets/fonts/fontawesome-webfont.ttf');

export default class App extends React.Component {
  state = {assetsLoaded: false};

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome
    });

    this.setState({assetsLoaded: true});
  }

  render() {
    const {assetsLoaded} = this.state;

    return assetsLoaded ? (
      <ApolloProvider client={client}>
        <View style={styles.gradient}>
          <Navigator style={styles.container} />
          {/* <NavigationDrawer /> */}
        </View>
      </ApolloProvider>
    ) : null; // <--- @todo place holder until we have a loading page
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
