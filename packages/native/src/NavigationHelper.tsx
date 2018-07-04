import {NavigationActions} from 'react-navigation';

export const ROUTES = {
  HOME: 'Home',
  WELCOME: 'Welcome',
  CONFIRMATION: 'Confirmation',
  REGISTRATION_COMPLETE: 'RegistrationComplete',
  EVENT: 'Event'
};

export default class NavigationHelper {
  static NAVIGATOR;

  static navigateTo(route, params = {}) {
    this.NAVIGATOR.dispatch(
      NavigationActions.navigate({
        routeName: route,
        params
      })
    );
  }
}
