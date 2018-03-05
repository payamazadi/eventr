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
      <Confirmation
        {...this.props}
        onSubmit={() => this.props.validateTokenAction(this.props.token)}
        onFormFilled={this.props.saveTokenAction}
      />
    );
  }
}

function mapStateToProps(state) {
  const {
    isTokenVerified,
    isVerifyingToken,
    verificationError,
    token
  } = state.verification;
  return { isTokenVerified, isVerifyingToken, verificationError, token };
}

export default connect(mapStateToProps, {
  validateTokenAction: verificationActions.validateToken,
  saveTokenAction: verificationActions.saveTokenToState
})(ConfirmationContainer);
