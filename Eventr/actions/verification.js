import { ACTIONS } from "../shared/actionTypes";
import { validatePhoneService } from "../services";

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
    // await setTimeout(() => {
    //   dispatch(validatePhoneSuccess());
    // }, 1000);
  };
}

function validateTokenStart() {
  return {
    type: ACTIONS.VALIDATE_TOKEN_START
  };
}

function validateTokenSuccess() {
  return {
    type: ACTIONS.VALIDATE_TOKEN_SUCCESS
  };
}

function validateTokenFailure() {
  return {
    type: ACTIONS.VALIDATE_TOKEN_FAILURE
  };
}

function validateToken(Token) {
  return async dispatch => {
    dispatch(validateTokenStart());
    //pretending to be async here
    await setTimeout(() => {
      dispatch(validateTokenSuccess());
    }, 1000);
  };
}

function savePhoneToState(phoneNumber) {
  return {
    type: ACTIONS.SAVE_PHONE_TO_STATE,
    payload: phoneNumber
  };
}

export { validatePhone, validateToken, savePhoneToState };
