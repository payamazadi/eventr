import { NavigationActions } from "react-navigation";

export const ROUTES = {
    HOME:"Home",
    LOGIN: "Login",
    ATTENDEES: "Attendees"
}

export default class NavigationHelper {
    static NAVIGATOR;

    static navigateTo(route){
        this.NAVIGATOR.dispatch(NavigationActions.navigate({
            type: "Navigation/NAVIGATE",
            routeName: route
          }));
    }
}