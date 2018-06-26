import React from "react";
import { AsyncStorage } from "react-native";

import { Welcome } from "pages";

import NavigationHelper, { ROUTES } from "../NavigationHelper";

class WelcomeContainer extends React.Component {
  static navigationOptions = { header: null };

  componentWillMount() {
    //AsyncStorage.removeItem("validated");
    //AsyncStorage.setItem("validated", "true");
  }
  componentDidMount() {
    AsyncStorage.getItem("validated").then(isValidated => {
      if (isValidated === "true") {
        NavigationHelper.navigateTo(ROUTES.REGISTRATION_COMPLETE);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPhoneVerified) {
      NavigationHelper.navigateTo(ROUTES.CONFIRMATION);
    }
  }

  render() {
    return (
      <Welcome
        {...this.props}
        onSubmit={() => {
          this.props.validatePhoneAction(this.props.phoneNumber);
        }}
        onFormFilled={this.props.savePhoneAction}
      />
    );
  }
}
