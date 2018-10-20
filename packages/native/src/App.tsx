import React from 'react';

import {ApolloProvider} from 'react-apollo';
import {Font, AppLoading} from 'expo';

import Navigation from './Navigation';

import client from './ApolloClient';
export default class App extends React.Component {
  state = {assetsLoaded: false};

  async componentDidMount() {
    await Font.loadAsync({Roboto: require('native-base/Fonts/Roboto.ttf')});

    this.setState({assetsLoaded: true});
  }

  render() {
    return this.state.assetsLoaded ? (
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    ) : (
      <AppLoading />
    );
  }
}
