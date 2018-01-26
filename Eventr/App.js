import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { LinearGradient, Font } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { StackNavigator, NavigationActions } from "react-navigation";

import NavigationHelper, { ROUTES } from "./NavigationHelper";
import Home from './components/pages/Home';
import Login from "./components/pages/Login";
import {
  PhoneInput,
  ConfirmationInput,
  SubmitButton,
  TextInput,
  SelectInput
} from "inputs";
import {
  TextTitle,
  TextSubtitle,
  TextHeading1,
  TextHeading2,
  TextHeading3,
  TextCaptionRegular,
  TextRegular,
  TextLinkRegular,
  TextPageTitle
} from "text";
import { colors } from "shared";
import { Drawer } from "wrappers";

let _navContainer;
const Navigator = StackNavigator({
  Home: { screen: Home, header: null },
  Login: { screen: Login }
}
);

export default class App extends React.Component {
  state = { drawerOpen: false, fontLoaded: false};

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: require("./assets/fonts/fontawesome-webfont.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  toggleDrawer(open) {
    this.setState({ drawerOpen: open });
  }

  render() {
    return <View colors={colors.gradient} style={styles.gradient}>
        <Navigator style={styles.container} ref={navigatorRef => {
            NavigationHelper.NAVIGATOR = navigatorRef;
          }} />
        <View style={styles.navButton}>
          <SubmitButton onPress={() => {
              this.toggleDrawer(true);
            }}>
            Open Drawer
          </SubmitButton>
        </View>
        <Drawer open={this.state.drawerOpen}>
          <TextRegular>
            {this.state.fontLoaded ? (
              <FontAwesome>{Icons.dashboard}</FontAwesome>
            ) : null}{" "}
            Dashboard
          </TextRegular>
          <SubmitButton onPress={() => {
              this.toggleDrawer(false);
              //this.props.navigation.navigate("Login");
              NavigationHelper.navigateTo(ROUTES.LOGIN);
            }}>
            other page
          </SubmitButton>
          <SubmitButton onPress={() => {
              this.toggleDrawer(false);
            }}>
            Close the Drawer
          </SubmitButton>
        </Drawer>
      </View>;
  }
               };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gradient: {
    height: "100%",
    width: "100%"
  },
  navButton:{
    position: "absolute",
    top: 50,
    right: 10
  }
});

