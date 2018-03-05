import { combineReducers } from "redux";
import navigation from "./navigation";
import verification from "./verification";
import attendees from "./attendees";

export default combineReducers({
  navigation,
  verification,
  attendees
});
