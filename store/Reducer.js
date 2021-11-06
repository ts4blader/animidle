import { ACTION } from "./Store";

const reducer = (state, action) => {
  switch (action.type) {
    // Sign up form
    case ACTION.SHOW_SIGNUP_FORM:
      return { ...state, showSignUpForm: true };
    case ACTION.HIDE_SIGNUP_FORM:
      return { ...state, showSignUpForm: false };
    case ACTION.TOGGLE_SIGNUP_FORM:
      return { ...state, showSignUpForm: !state.showSignUpForm };
    // Player
    case ACTION.SHOW_PLAYER:
      return { ...state, showPlayer: true };
    case ACTION.HIDE_PLAYER:
      return { ...state, showPlayer: false };
    // Search Term
    case ACTION.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      alert("Something went wrong! Not in action");
      return state;
  }
};

export default reducer;
