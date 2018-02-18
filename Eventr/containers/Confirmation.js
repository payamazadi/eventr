import React from "react";
import { connect } from "react-redux";
import { Confirmation } from "pages";
import * as verificationActions from "../actions/verification";
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
      <Confirmation {...this.props} onSubmit={this.props.validateTokenAction} />
    );
  }
}

function mapStateToProps(state) {
  const { isTokenVerified, isVerifyingToken } = state.verification;
  return { isTokenVerified, isVerifyingToken };
}

export default connect(mapStateToProps, {
  validateTokenAction: verificationActions.validateToken
})(ConfirmationContainer);
