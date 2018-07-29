import React from 'react';
import {navigateTo, ROUTES} from '../Navigator';
import {RegistrationComplete} from '../components/pages';

interface Props {
  navigation: any;
}

export default class RegistrationCompleteContainer extends React.Component<Props> {
  static navigationOptions = {header: null};

  render() {
    const {navigation} = this.props;
    return (
      <RegistrationComplete
        {...this.props}
        onSubmit={() => {
          navigateTo(navigation, ROUTES.EVENT);
        }}
      />
    );
  }
}
