import React from "react";
import { connect } from "react-redux";
import { RegistrationComplete } from "pages";
import * as navigationActions from "../actions/navigation";
import NavigationHelper, { ROUTES } from "../NavigationHelper";

class RegistrationCompleteContainer extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <RegistrationComplete
        {...this.props}
        onSubmit={this.props.openDrawerAction}
      />
    );
  }
}

export default connect(null, null)(RegistrationCompleteContainer);
