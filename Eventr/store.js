import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

export function configureStore() {
  const initialState = {};
  const store = createStore(reducers, initialState, applyMiddleware(thunk));

  return store;
}
