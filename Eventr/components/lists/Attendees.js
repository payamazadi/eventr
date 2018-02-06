import React from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import { Badge, List, ListItem, Icon } from "native-base";

export default class Attendees extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        {this.props.attendees.map(function (attendee,idx){
          if(attendee.attending === 1) {
            return <ListItem key={idx} icon><Icon name="md-checkmark-circle"/><Text>{attendee.name}</Text></ListItem>
          } else if (attendee.attending === 2) {
            return <ListItem key={idx} icon><Icon name="md-warning"/><Text>{attendee.name}</Text></ListItem> 
          } else {
            return <ListItem key={idx} icon><Icon name="md-close"/><Text>{attendee.name}</Text></ListItem>
          }
          
        })}
      </List>
    )
  }
}

const styles = StyleSheet.create({
});
