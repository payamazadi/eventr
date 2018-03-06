import { AsyncStorage } from "react-native";
import { ACTIONS } from "../shared/actionTypes";
import { validatePhoneService, validateTokenService } from "../services";

function validatePhoneStart() {
  return {
    type: ACTIONS.VALIDATE_PHONE_START
  };
}

function validatePhoneSuccess(token) {
  return {
    type: ACTIONS.VALIDATE_PHONE_SUCCESS,
    payload: token
  };
}

function validatePhoneFailure(err) {
  return {
    type: ACTIONS.VALIDATE_PHONE_FAILURE,
    payload: err
  };
}

function validatePhone(phoneNumber) {
  return dispatch => {
    dispatch(validatePhoneStart());
    //pretending to be async here

    let response = validatePhoneService(phoneNumber);

    response.then(token => dispatch(validatePhoneSuccess(token))).catch(err => {
      dispatch(validatePhoneFailure(err));
    });
  };
}

function validateTokenStart() {
  return {
    type: ACTIONS.VALIDATE_TOKEN_START
  };
}

function validateTokenSuccess(message) {
  return {
    type: ACTIONS.VALIDATE_TOKEN_SUCCESS,
    payload: message
  };
}

function validateTokenFailure(err) {
  return {
    type: ACTIONS.VALIDATE_TOKEN_FAILURE,
    payload: err
  };
}

function validateToken(token) {
  return dispatch => {
    dispatch(validateTokenStart());
    //pretending to be async here

    let response = validateTokenService(token);

    response
      .then(message => {
        AsyncStorage.setItem("validated", "true");
        dispatch(validateTokenSuccess(message));
      })
      .catch(err => {
        dispatch(validateTokenFailure(err));
      });
  };
}

function savePhoneToState(phoneNumber) {
  return {
    type: ACTIONS.SAVE_PHONE_TO_STATE,
    payload: phoneNumber
  };
}

function saveTokenToState(token) {
  return {
    type: ACTIONS.SAVE_TOKEN_TO_STATE,
    payload: token
  };
}

export { validatePhone, validateToken, savePhoneToState, saveTokenToState };
