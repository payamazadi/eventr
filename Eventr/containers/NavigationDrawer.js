import React from "react";
import { Font } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigationActions from "../actions/navigation";
import NavigationHelper, { ROUTES } from "../NavigationHelper";
import { Drawer } from "wrappers";

import { TextRegular } from "text";

import { SubmitButton } from "inputs";

class NavigationDrawer extends React.Component {
  state = { fontLoaded: false };

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: require("../assets/fonts/fontawesome-webfont.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Drawer open={this.props.isDrawerOpen}>
        <TextRegular>
          {this.state.fontLoaded ? (
            <FontAwesome>{Icons.dashboard}</FontAwesome>
          ) : null}{" "}
          Dashboard
        </TextRegular>
        <SubmitButton
          onPress={() => {
            this.props.closeDrawerAction();
            //this.props.navigation.navigate("Login");
            NavigationHelper.navigateTo(ROUTES.ATTENDEES);
          }}
        >
          other page
        </SubmitButton>
        <SubmitButton
          onPress={() => {
            this.props.closeDrawerAction();
          }}
        >
          Close the Drawer
        </SubmitButton>
      </Drawer>
    );
  }
}

function mapStateToProps(state) {
  const { isDrawerOpen } = state.navigation;
  return { isDrawerOpen };
}

export default connect(mapStateToProps, {
  closeDrawerAction: navigationActions.closeDrawer
})(NavigationDrawer);
