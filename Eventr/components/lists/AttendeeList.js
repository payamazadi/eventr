import React from "react";
import { StyleSheet } from "react-native";
import { List, ListItem, Icon, Text, Body, Left, Content } from "native-base";

export default class AttendeeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <List dataArray={this.props.theAttendees}
                renderRow={(item) =>
                  <ListItem icon>
                    <Left>
                      <Icon name={item.icon} />
                    </Left>
                    <Body>
                      <Text>{item.name}</Text>
                    </Body>
                  </ListItem>
                }>
            </List>
        
    )
  }
}

const styles = StyleSheet.create({
    
});
