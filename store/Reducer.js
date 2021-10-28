import { ACTION } from "./Store";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SHOW_SIGNUP_FORM:
      return { ...state, showSignUpForm: true };
    case ACTION.HIDE_SIGNUP_FORM:
      return { ...state, showSignUpForm: false };
    case ACTION.TOGGLE_SIGNUP_FORM:
      return { ...state, showSignUpForm: !state.showSignUpForm };
    default:
      alert("Something went wrong! Not in action");
      return state;
  }
};

export default reducer;
