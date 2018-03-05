import { combineReducers } from "redux";
import navigation from "./navigation";
import verification from "./verification";
import event from "./event";

export default combineReducers({
  navigation,
  verification,
  event
});
