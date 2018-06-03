import React from "react";
import { StyleSheet, View } from "react-native";
import { Font } from "expo";
import { StackNavigator } from "react-navigation";

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { ApolloProvider } from "react-apollo";
import AppSync from "./AppSync.js";

import NavigationHelper from "./NavigationHelper";

import EventContainer from "./containers/Event";

import { colors } from "shared";

import gql from "graphql-tag";

const client = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSync.apiKey
  }
});

const Navigator = StackNavigator({
  Event: { screen: EventContainer }
});

export default class App extends React.Component {
  state = { assetsLoaded: false };

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: require("./assets/fonts/fontawesome-webfont.ttf")
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;

    return assetsLoaded ? (
      <ApolloProvider client={client}>
        <Rehydrated>
          <View colors={colors.gradient} style={styles.gradient}>
            <Navigator
              style={styles.container}
              ref={navigatorRef => {
                NavigationHelper.NAVIGATOR = navigatorRef;
              }}
            />
            {/* <NavigationDrawer /> */}
          </View>
        </Rehydrated>
      </ApolloProvider>
    ) : null; // <--- place holder until we have a loading page
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gradient: {
    height: "100%",
    width: "100%"
  }
});
