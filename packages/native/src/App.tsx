import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Font} from 'expo';
import {StackNavigator} from 'react-navigation';

import {ApolloProvider} from 'react-apollo';

import NavigationHelper from './NavigationHelper';

import EventContainer from './containers/Event';

import ApolloClient from 'apollo-boost';

const fontAwesome = require('../assets/fonts/fontawesome-webfont.ttf');

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  clientState: {
    defaults: {},
    resolvers: {}
  }
});

const Navigator = StackNavigator({
  Event: {screen: EventContainer}
});

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
          <Navigator
            style={styles.container}
            ref={navigatorRef => {
              NavigationHelper.NAVIGATOR = navigatorRef;
            }}
          />
          {/* <NavigationDrawer /> */}
        </View>
      </ApolloProvider>
    ) : null; // <--- place holder until we have a loading page
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
