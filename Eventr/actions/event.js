import { ACTIONS } from "../shared/actionTypes";
import { getEventService } from "../services";

function getEventStart() {
  return {
    type: ACTIONS.GET_EVENT_START
  };
}

function getEventSuccess(data) {
  return {
    type: ACTIONS.GET_EVENT_SUCCESS,
    payload: data
  };
}

function getEventFailure(err) {
  return {
    type: ACTIONS.GET_EVENT_FAILURE,
    payload: err
  };
}

function getEvent(id) {
  return dispatch => {
    dispatch(getEventStart());

    let response = getEventService(id);

    response.then(data => dispatch(getEventSuccess(data))).catch(err => {
      dispatch(getEventFailure(err));
    });
  };
}

function setEventEdit(isEditing) {
  return {
    type: ACTIONS.SET_EVENT_EDITING,
    payload: isEditing
  };
}

function setEventData(update) {
  return {
    type: ACTIONS.SET_EVENT_DATA,
    payload: update
  };
}

export { getEvent, setEventEdit, setEventData };
