import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Container, Header, Content, List, ListItem, Left, Right, Body } from "native-base";
import { LinearGradient, Font } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { AttendeeList } from 'lists';
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

export default class Attendees extends React.Component {
    static navigationOptions = { header: null };

    render() {
      var attendees = [
        {
          name: "Brendan Cass",
          avatar: "brendan.jpg",
          attending: 1,
          icon: "md-checkmark-circle"
        },
        {
          name: "Payam Azadi",
          avatar: "payam.jpg",
          attending: 2,
          icon: "md-warning"
        },
        {
          name: "Steven Ayers",
          avatar: "ayers.jpg",
          attending: 3,
          icon: "md-close"
        }

      ];
      /*
      return <Container>
                <Header>
                  <Left><Text>Header Left</Text></Left>
                  <Body><Text>Header center</Text></Body>
                  <Right><Text>Header right</Text></Right>
                </Header>
                <Content>
                  <AttendeeList theAttendees={attendees} />
                </Content>
              </Container>;
      */
      return <Container>
                <Header>
                  <Left><Text>Header Left</Text></Left>
                  <Body><Text>Header center</Text></Body>
                  <Right><Text>Header right</Text></Right>
                </Header>
                

                <Content>
                  {/*<View style={styles.container} contentContainerStyle={styles.container2}>*/}
                    <AttendeeList theAttendees={attendees} style={{width: 400}} />
                  {/*</View>*/}
                </Content>
              </Container>; 

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "red",
    width: "100%"
  },
  container2: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    
    width: "100%"
  },
  gradient: {
    height: "100%",
    width: "100%"
  }
});
