import { ACTIONS } from "../shared/actionTypes";

const INITIAL_STATE = {
  isVerifyingPhone: false,
  isPhoneVerified: false
};

function verification(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.VALIDATE_PHONE_START:
      return { ...state, isVerifyingPhone: true };
    case ACTIONS.VALIDATE_PHONE_SUCCESS:
      return { ...state, isVerifyingPhone: false, isPhoneVerified: true };
    default:
      return state;
  }
}

export default verification;
