import { ACTIONS } from "../shared/actionTypes";
import { attendeeListLoadData } from "../services";

function attendeeListLoadStart() {
  return {
    type: ACTIONS.ATTENDEE_LIST_LOAD_START,
  };
}

function attendeeListLoadSuccess(data) {
  return {
    type: ACTIONS.ATTENDEE_LIST_LOAD_SUCCESS,
    payload: data
  };
}

function attendeeListLoadFailure(err) {
  return {
    type: ACTIONS.ATTENDEE_LIST_LOAD_FAILURE,
    payload: err
  };
}

function attendeeListLoad(eventId) {
  return dispatch => {
    dispatch(attendeeListLoadStart());
    //pretending to be async here

    let response = attendeeListLoadData(eventId);

    response.then(response => {
      dispatch(attendeeListLoadSuccess(response));
    }).catch(err => { dispatch(attendeeListLoadFailure(err))});
  };
}

export { attendeeListLoad };