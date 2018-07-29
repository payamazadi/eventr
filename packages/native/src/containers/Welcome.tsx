import React from 'react';
import {AsyncStorage} from 'react-native';

import RegisterUser from './mutations/RegisterUser';

import {Welcome} from '../components/pages';

import {navigateTo, ROUTES} from '../Navigator';

interface Props {
  navigation: any;
}

export default class WelcomeContainer extends React.Component<Props> {
  static navigationOptions = {header: null};

  state = {
    phoneNumber: null
  };
  componentWillMount() {
    AsyncStorage.removeItem('authorization');
    //AsyncStorage.setItem("validated", "true");
  }
  componentDidMount() {
    AsyncStorage.getItem('authorization').then(authKey => {
      if (authKey) {
        navigateTo(this.props.navigation, ROUTES.REGISTRATION_COMPLETE);
      }
    });
  }

  render() {
    const {navigation} = this.props;

    return (
      <RegisterUser>
        {({registerUser, loading, error}) => {
          return (
            <Welcome
              isVerifyingPhone={loading}
              verificationError={error}
              onSubmit={() => {
                this.state.phoneNumber &&
                  registerUser({variables: {phoneNumber: this.state.phoneNumber}}).then(
                    ({data}) => {
                      if (data.registerUser) {
                        navigateTo(navigation, ROUTES.CONFIRMATION, {
                          phoneNumber: this.state.phoneNumber
                        });
                      }
                    }
                  );
              }}
              onFormFilled={phoneNumber => {
                this.setState({phoneNumber});
              }}
            />
          );
        }}
      </RegisterUser>
    );
  }
}
