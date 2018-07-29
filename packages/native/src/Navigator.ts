import {StackNavigator} from 'react-navigation';
import {NavigationActions} from 'react-navigation';

import EventContainer from './containers/Event';
import WelcomeContainer from './containers/Welcome';
import ConfirmationContainer from './containers/Confirmation';
import RegistrationCompleteContainer from './containers/RegistrationComplete';

export const ROUTES = {
  HOME: 'Home',
  WELCOME: 'Welcome',
  CONFIRMATION: 'Confirmation',
  REGISTRATION_COMPLETE: 'RegistrationComplete',
  EVENT: 'Event'
};

export const Navigator = StackNavigator({
  Welcome: {screen: WelcomeContainer},
  Confirmation: {screen: ConfirmationContainer},
  RegistrationComplete: {screen: RegistrationCompleteContainer},
  Event: {screen: EventContainer}
});

export const navigateTo = (navigator, route, params = {}) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName: route,
      params
    })
  );
};
