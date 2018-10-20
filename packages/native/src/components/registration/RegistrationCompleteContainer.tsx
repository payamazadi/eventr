import React from 'react';
import {withNavigation, NavigationInjectedProps} from 'react-navigation';
import {PATHS} from '../../Navigation';
import RegistrationComplete from './RegistrationComplete';

interface Props {
  navigation: any;
}

class RegistrationCompleteContainer extends React.Component<NavigationInjectedProps> {
  public render() {
    const {navigation} = this.props;
    return (
      <RegistrationComplete
        handleSubmit={() => {
          console.log('DONE');
        }}
      />
    );
  }
}

export default withNavigation(RegistrationCompleteContainer);
