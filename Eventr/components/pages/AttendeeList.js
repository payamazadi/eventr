import React from "react";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { Container, Header, Body, Content } from "native-base";
import { TransparentOverlay } from "wrappers";
import { TextRegular } from "text";
import { Logo } from "common";

export default class AttendeeList extends React.Component {
  static navigationOptions = { header: null };

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
          <TextRegular>{this.props.attendeeListData}</TextRegular>
        </Content>
        <TransparentOverlay show={false} />
      </Container>
      
      
    );
  }
}
