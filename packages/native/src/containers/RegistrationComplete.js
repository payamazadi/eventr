import React from "react";

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
