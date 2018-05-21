import React from "react";

import { Confirmation } from "pages";

import NavigationHelper, { ROUTES } from "../NavigationHelper";

class ConfirmationContainer extends React.Component {
  static navigationOptions = { header: null };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isTokenVerified) {
      NavigationHelper.navigateTo(ROUTES.REGISTRATION_COMPLETE);
    }
  }

  render() {
    return (
      <Confirmation
        {...this.props}
        onSubmit={() => this.props.validateTokenAction(this.props.token)}
        onFormFilled={this.props.saveTokenAction}
      />
    );
  }
}
