import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo";

import { StackNavigator, NavigationActions } from "react-navigation";
import { Provider } from "react-redux";

import { configureStore } from "./store";
import NavigationHelper from "./NavigationHelper";

import Welcome from "./containers/Welcome";
import Confirmation from "./containers/Confirmation";
import RegistrationComplete from "./containers/RegistrationComplete";
import EventContainer from "./containers/Event";

import NavigationDrawer from "./containers/NavigationDrawer";
import { colors } from "shared";

let _navContainer;
const store = configureStore();
const Navigator = StackNavigator({
  Welcome: { screen: Welcome },
  Confirmation: { screen: Confirmation },
  RegistrationComplete: { screen: RegistrationComplete },
  Event: { screen: EventContainer }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View colors={colors.gradient} style={styles.gradient}>
          <Navigator
            style={styles.container}
            ref={navigatorRef => {
              NavigationHelper.NAVIGATOR = navigatorRef;
            }}
          />
          <NavigationDrawer />
        </View>
      </Provider>
    );
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
