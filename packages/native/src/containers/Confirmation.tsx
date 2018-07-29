import React from 'react';
import {AsyncStorage} from 'react-native';
import AuthenticateUser from './mutations/AuthenticateUser';

import {Confirmation} from '../components/pages';
import {navigateTo, ROUTES} from '../Navigator';

// import { navigateTo, ROUTES } from '../Navigator';

interface Props {
  navigation: any;
}

export default class ConfirmationContainer extends React.Component<Props> {
  static navigationOptions = {header: null};

  state = {
    token: ''
  };

  render() {
    const {navigation} = this.props;
    return (
      <AuthenticateUser>
        {({loading, error, authenticateUser}) => (
          <Confirmation
            isVerifyingToken={loading}
            verificationError={error}
            onSubmit={() => {
              this.state.token &&
                authenticateUser({
                  variables: {
                    registrationToken: this.state.token,
                    phoneNumber: navigation.state.params.phoneNumber
                  }
                }).then(({data}) => {
                  console.log(data);
                  if (data.authenticateUser) {
                    AsyncStorage.setItem('authorization', data.authenticateUser);
                    navigateTo(navigation, ROUTES.REGISTRATION_COMPLETE);
                  }
                });
            }}
            onFormFilled={token => {
              this.setState({token});
            }}
          />
        )}
      </AuthenticateUser>
    );
  }
}
