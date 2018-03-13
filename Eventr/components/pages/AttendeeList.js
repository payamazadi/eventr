import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { LinearGradient } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { Container, Header, Body, Content, List, ListItem, Left, Right, Icon, Text, connectStyle, Title } from "native-base";
import { TransparentOverlay } from "wrappers";
import { TextRegular } from "text";
import { colors } from "shared";
import { Logo } from "common";

export default class AttendeeList extends React.Component {
  static navigationOptions = { header: null };
  static defaultProps = { attendeeListData: [] }

  render() {
    const {
      attendeeListData,
      attendeesInvited,
      style
    } = this.props;

    return (

      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View>

            <Header>
              <Left/>
              <Body>
                <Title>test</Title>
              </Body>
              <Right><Text style={styles.text}>1/4</Text></Right>
            </Header>
          
          <List dataArray={attendeeListData}
              renderRow={(item) =>
                {
                  let icon = "";
                  switch(item.attending) {
                    case 1:
                      icon = "md-checkmark-circle";
                      break;
                    case 2:
                      icon = "md-warning";
                      break;
                    case 3:
                      icon = "md-close";
                      break;
                    default:
                      icon = "";
                  }
                  return (
                <ListItem icon>
                  <Left>
                    <Icon name={icon} />
                  </Left>
                  <Body>
                    <Text>{item.name}</Text>
                  </Body>
                </ListItem>
                  )
                }
              }>
          </List>
          <TransparentOverlay show={false} />
        </View>
      </LinearGradient>
      
      
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "red"
  },
  gradient: {
    height: "100%",
    width: "100%"
  },
});

