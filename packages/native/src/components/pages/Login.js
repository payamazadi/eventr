import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {LinearGradient, Font} from 'expo';
import {Container, Header, Content, Badge} from 'native-base';

import {PhoneInput, ConfirmationInput, SubmitButton, TextInput, SelectInput} from '../inputs/';
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
} from '../text/';
import {colors} from '../../shared/';
import {Drawer} from '../wrappers/';

export default class Login extends React.Component {
  state = {
    drawerOpen: false,
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: require('../../assets/fonts/fontawesome-webfont.ttf')
    });

    this.setState({fontLoaded: true});
  }

  toggleDrawer(open) {
    this.setState({drawerOpen: open});
  }

  render() {
    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <TextCaptionRegular>English (US)</TextCaptionRegular>
          <TextTitle>Welcome to Weaver</TextTitle>
          {/*This doesn't stay centered after a certain length..*/}
          <TextSubtitle>It's easy to start, just enter your phone number</TextSubtitle>
          <PhoneInput />
          <ConfirmationInput />
          <SubmitButton onPress={() => Alert.alert('Next!')} filled>
            Confirm
          </SubmitButton>
          <SubmitButton onPress={() => Alert.alert('Next!')}>Events around me</SubmitButton>
          <TextInput label="LIST NAME" />
          <SelectInput label="TYPE" />
          <TextHeading1>Hello H1</TextHeading1>
          <TextHeading2>Hello H2</TextHeading2>
          <TextHeading3>Hello H3</TextHeading3>
          <TextRegular>Regular text that we'll have everywhere</TextRegular>
          <TextLinkRegular>Regular link text that we'll have everywhere</TextLinkRegular>
          <TextPageTitle>Settings</TextPageTitle>
          <Badge>
            <Text>2</Text>
          </Badge>
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
