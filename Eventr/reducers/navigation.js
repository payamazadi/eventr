import { ACTIONS } from "../shared/actionTypes";

const INITIAL_STATE = {
  isDrawerOpen: false
};

function navigation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.OPEN_DRAWER:
      return { ...state, isDrawerOpen: true };
    case ACTIONS.CLOSE_DRAWER:
      return { ...state, isDrawerOpen: false };
    default:
      return state;
  }
}

export default navigation;
