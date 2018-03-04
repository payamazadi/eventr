import { NavigationActions } from "react-navigation";

export const ROUTES = {
  HOME: "Home",
  WELCOME: "Welcome",
  CONFIRMATION: "Confirmation",
  REGISTRATION_COMPLETE: "RegistrationComplete"
};

export default class NavigationHelper {
  static NAVIGATOR;

su  static navigateTo(route, params = {}) {
    this.NAVIGATOR.dispatch(
      NavigationActions.navigate({
        type: "Navigation/NAVIGATE",
        routeName: route,
        params
      })
    );
  }
}
