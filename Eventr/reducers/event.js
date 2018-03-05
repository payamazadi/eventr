import { ACTIONS } from "../shared/actionTypes";

const INITIAL_STATE = {
  isLoadingEvent: false,
  isEditingEvent: false,
  eventLoadingError: null,
  eventData: null
};

function event(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_EVENT_START:
      return { ...state, isLoadingEvent: true, eventLoadingError: null };
    case ACTIONS.GET_EVENT_SUCCESS:
      return { ...state, isLoadingEvent: false, eventData: action.payload };
    case ACTIONS.GET_EVENT_FAILURE:
      return {
        ...state,
        isLoadingEvent: false,
        eventLoadingError: action.payload
      };
    case ACTIONS.SET_EVENT_EDITING:
      return {
        ...state,
        isEditingEvent: action.payload
      };
    default:
      return state;
  }
}

export default event;
