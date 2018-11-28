import React from 'react';
import {AsyncStorage} from 'react-native';
import {withNavigation, NavigationInjectedProps} from 'react-navigation';

import AuthenticateUser from '../mutations/AuthenticateUser';
import Confirmation from './Confirmation';
import {PATHS} from '../../Paths';

// import { navigateTo, ROUTES } from '../Navigator';

class ConfirmationContainer extends React.Component<NavigationInjectedProps> {
  public state = {
    token: ''
  };

  public render() {
    const {navigation} = this.props;
    return (
      <AuthenticateUser>
        {({loading, error, authenticateUser}) => (
          <Confirmation
            token={this.state.token}
            isVerifyingToken={loading}
            verificationError={error}
            handleSubmit={() => {
              if (this.state.token) {
                authenticateUser({
                  variables: {
                    registrationToken: this.state.token,
                    phoneNumber: navigation.state.params.phoneNumber
                  }
                }).then(({data}) => {
                  console.log(data);
                  if (data.authenticateUser) {
                    AsyncStorage.setItem('authorization', data.authenticateUser);
                    navigation.navigate(PATHS.RegistrationComplete);
                  }
                });
              }
            }}
            handleChange={token => {
              this.setState({token});
            }}
          />
        )}
      </AuthenticateUser>
    );
  }
}

export default withNavigation(ConfirmationContainer);
