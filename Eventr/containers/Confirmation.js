import React from "react";
import { connect } from "react-redux";
import Confirmation from "../components/pages/Confirmation";
import * as navigationActions from "../actions/navigation";
import NavigationHelper, { ROUTES } from "../NavigationHelper";

class ConfirmationContainer extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Confirmation {...this.props} onSubmit={this.props.openDrawerAction} />
    );
  }
}

function mapStateToProps(state) {
  const { isDrawerOpen } = state.navigation;
  return { isDrawerOpen };
}

export default connect(mapStateToProps, {
  openDrawerAction: navigationActions.openDrawer
})(ConfirmationContainer);
