import React, { Component } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { LinearGradient, Font } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";
<<<<<<< HEAD
import { Container, Header, Content, Badge } from 'native-base';
import { Attendees } from 'lists';
import { PhoneInput, ConfirmationInput, SubmitButton, TextInput, SelectInput} from "inputs";
import { TextTitle, TextSubtitle, TextHeading1, TextHeading2, TextHeading3, TextCaptionRegular, TextRegular, TextLinkRegular, TextPageTitle } from "text";
=======
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
>>>>>>> master
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
<<<<<<< HEAD
    var attendees = [
        {
          name: "Brendan Cass",
          avatar: "brendan.jpg",
          attending: 1
        },
        {
          name: "Payam Azadi",
          avatar: "payam.jpg",
          attending: 2
        },
        {
          name: "Steven Ayers",
          avatar: "ayers.jpg",
          attending: 3
        }

    ];

    return <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <TextCaptionRegular>English (US)</TextCaptionRegular>
          <TextTitle>Welcome to Weaver</TextTitle>
          {/*This doesn't stay centered after a certain length..*/}
          <TextSubtitle>
            It's easy to start, just enter your phone number
          </TextSubtitle>
          <PhoneInput />
          <ConfirmationInput />
          <SubmitButton onPress={() => Alert.alert("Next!")} filled>
            Confirm
          </SubmitButton>
          <SubmitButton onPress={() => Alert.alert("Next!")}>
            Events around me
          </SubmitButton>
          <TextInput label="LIST NAME" />
          <SelectInput label="TYPE" />
          <TextHeading1>Hello H1</TextHeading1>
          <TextHeading2>Hello H2</TextHeading2>
          <TextHeading3>Hello H3</TextHeading3>
          <TextRegular>Regular text that we'll have everywhere</TextRegular>
          <TextLinkRegular>
            Regular link text that we'll have everywhere
          </TextLinkRegular>
          <TextPageTitle>Settings</TextPageTitle>
=======
    return <View colors={colors.gradient} style={styles.gradient}>
        <Navigator style={styles.container} ref={navigatorRef => {
            NavigationHelper.NAVIGATOR = navigatorRef;
          }} />
        <View style={styles.navButton}>
>>>>>>> master
          <SubmitButton onPress={() => {
              this.toggleDrawer(true);
            }}>
            Open Drawer
          </SubmitButton>
<<<<<<< HEAD
          <Drawer open={this.state.drawerOpen}>
            <TextRegular>
              {this.state.fontLoaded ? (
                <FontAwesome>{Icons.dashboard}</FontAwesome>
              ) : null}{" "}
              Dashboard
            </TextRegular>
            <SubmitButton onPress={() => {
                this.toggleDrawer(false);
              }}>
              Close the Drawer
            </SubmitButton>
          </Drawer>
          <Badge><Text>2</Text></Badge>
          <Attendees attendees={attendees} />
=======
>>>>>>> master
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

