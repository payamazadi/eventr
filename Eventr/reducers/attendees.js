import { ACTIONS } from "../shared/actionTypes";

const INITIAL_STATE = {
  attendeeListId: null,
  attendeeListData: null
};

function attendees(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.ATTENDEE_LIST_LOAD_START:
      return { ...state, attendeeListId: 0, attendeeListData: null };
    case ACTIONS.ATTENDEE_LIST_LOAD_SUCCESS:
      return { ...state, attendeeListId: action.payload.attendeeListId, attendeeListData: action.payload.attendeeListData, attendeesInvited: action.payload.attendeesInvited };
    case ACTIONS.ATTENDEE_LIST_LOAD_FAILURE:
      return { ...state, attendeeListId: action.payload.attendeeListId, attendeeListData: action.payload.err};
    default:
      return state;
  }
}

export default attendees;