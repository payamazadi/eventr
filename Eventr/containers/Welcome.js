import React from "react";
import { connect } from "react-redux";
import Welcome from "../components/pages/Welcome";
import * as verificationActions from "../actions/verification";
import NavigationHelper, { ROUTES } from "../NavigationHelper";

class WelcomeContainer extends React.Component {
  static navigationOptions = { header: null };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPhoneVerified) {
      NavigationHelper.navigateTo(ROUTES.CONFIRMATION);
    }
  }

  render() {
    return (
      <Welcome {...this.props} onSubmit={this.props.validatePhoneAction} />
    );
  }
}

function mapStateToProps(state) {
  const { isPhoneVerified, isVerifyingPhone } = state.verification;
  return { isPhoneVerified, isVerifyingPhone };
}

export default connect(mapStateToProps, {
  validatePhoneAction: verificationActions.validatePhone
})(WelcomeContainer);
