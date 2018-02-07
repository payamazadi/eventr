import { ACTIONS } from "../shared/actionTypes";

function validatePhoneStart() {
  return {
    type: ACTIONS.VALIDATE_PHONE_START
  };
}

function validatePhoneSuccess() {
  return {
    type: ACTIONS.VALIDATE_PHONE_SUCCESS
  };
}

function validatePhoneFailure() {
  return {
    type: ACTIONS.VALIDATE_PHONE_FAILURE
  };
}

function validatePhone(phoneNumber) {
  return async dispatch => {
    dispatch(validatePhoneStart());
    //pretending to be async here
    await setTimeout(() => {
      dispatch(validatePhoneSuccess());
    }, 5000);
  };
}

export { validatePhone };
