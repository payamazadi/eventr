import React from 'react';
import {AsyncStorage} from 'react-native';
import {withNavigation, NavigationInjectedProps} from 'react-navigation';

import RegisterUser from '../mutations/RegisterUser';
import {PATHS} from '../../Navigation';
import Welcome from './Welcome';

class WelcomeContainer extends React.Component<NavigationInjectedProps> {
  public state = {
    phoneNumber: null
  };
  public componentWillMount() {
    // AsyncStorage.removeItem('authorization');
    // AsyncStorage.setItem("validated", "true");
  }
  public componentDidMount() {
    const {navigation} = this.props;
    AsyncStorage.getItem('authorization').then(authKey => {
      if (authKey) {
        navigation.navigate(PATHS.RegistrationComplete);
      }
    });
  }

  public render() {
    const {navigation} = this.props;

    return (
      <RegisterUser>
        {({registerUser, loading, error}) => {
          return (
            <Welcome
              isVerifyingPhone={loading}
              verificationError={error}
              handleSubmit={() => {
                if (this.state.phoneNumber) {
                  registerUser({variables: {phoneNumber: this.state.phoneNumber}}).then(
                    ({data}) => {
                      if (data.registerUser) {
                        navigation.navigate(PATHS.Confirmation, {
                          phoneNumber: this.state.phoneNumber
                        });
                      }
                    }
                  );
                }
              }}
              handleChange={text => {
                console.log(text);
                this.setState({phoneNumber: text});
              }}
            />
          );
        }}
      </RegisterUser>
    );
  }
}

export default withNavigation(WelcomeContainer);
