import React from "react";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { Container, Header, Body, Content, List, ListItem, Left, Icon, Text } from "native-base";
import { TransparentOverlay } from "wrappers";
import { TextRegular } from "text";
import { Logo } from "common";

export default class AttendeeList extends React.Component {
  static navigationOptions = { header: null };
  static defaultProps = { attendeeListData: [] }

  render() {
    const {
      attendeeListData
    } = this.props;

    return (
      <Container>
        <Header>
          <Body><Logo /></Body>
        </Header>

        <Content>
          
          <List dataArray={attendeeListData}
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
        </Content>
        <TransparentOverlay show={false} />
      </Container>
      
      
    );
  }
}

