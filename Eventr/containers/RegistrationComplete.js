import React from "react";
import { connect } from "react-redux";
import { RegistrationComplete } from "pages";
import NavigationHelper, { ROUTES } from "../NavigationHelper";

class RegistrationCompleteContainer extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <RegistrationComplete
        {...this.props}
        onSubmit={() => {
          NavigationHelper.navigateTo(ROUTES.EVENT, { id: 1 });
        }}
      />
    );
  }
}

export default connect(null, null)(RegistrationCompleteContainer);
