import { ACTIONS } from "../shared/actionTypes";

function openDrawer() {
  return { type: ACTIONS.OPEN_DRAWER };
}

function closeDrawer() {
  return {
    type: ACTIONS.CLOSE_DRAWER
  };
}

export { openDrawer, closeDrawer };
