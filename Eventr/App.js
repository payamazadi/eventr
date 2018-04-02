import React from "react";
import { StyleSheet, View } from "react-native";
import { Font } from "expo";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import { configureStore } from "./store";
import NavigationHelper from "./NavigationHelper";

import Welcome from "./containers/Welcome";
import Confirmation from "./containers/Confirmation";
import RegistrationComplete from "./containers/RegistrationComplete";
import AttendeeList from "./containers/AttendeeList";
import EventContainer from "./containers/Event";
import NavigationDrawer from "./containers/NavigationDrawer";

import { colors } from "shared";

const store = configureStore();
const Navigator = StackNavigator({
  Welcome: { screen: Welcome },
  Confirmation: { screen: Confirmation },

  AttendeeList: { screen: AttendeeList },

  RegistrationComplete: { screen: RegistrationComplete },
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
