import { ACTIONS } from "../shared/actionTypes";

const INITIAL_STATE = {
  isVerifyingPhone: false,
  isPhoneVerified: false,
  isVerifyingToken: false,
  isTokenVerified: false,
  phoneNumber: null,
  verificationError: null,
  token: null
};

function verification(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.VALIDATE_PHONE_START:
      return { ...state, isVerifyingPhone: true, verificationError: null };
    case ACTIONS.VALIDATE_PHONE_SUCCESS:
      return { ...state, isVerifyingPhone: false, isPhoneVerified: true };
    case ACTIONS.VALIDATE_PHONE_FAILURE:
      return {
        ...state,
        isVerifyingPhone: false,
        isPhoneVerified: false,
        verificationError: action.payload
      };
    case ACTIONS.VALIDATE_TOKEN_START:
      return { ...state, isVerifyingToken: true, verificationError: null };
    case ACTIONS.VALIDATE_TOKEN_SUCCESS:
      return { ...state, isVerifyingToken: false, isTokenVerified: true };
    case ACTIONS.VALIDATE_TOKEN_FAILURE:
      return {
        ...state,
        isVerifyingToken: false,
        verificationError: action.payload
      };
    case ACTIONS.SAVE_PHONE_TO_STATE:
      return { ...state, phoneNumber: action.payload };
    case ACTIONS.SAVE_TOKEN_TO_STATE:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

export default verification;
