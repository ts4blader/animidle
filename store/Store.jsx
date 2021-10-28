import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

export const StoreContext = createContext(null);
// Initial state
const INITIAL_STATE = {
  showSignUpForm: false,
};
//Action
export const ACTION = {
  SHOW_SIGNUP_FORM: "SHOW_SIGNUP_FORM",
  HIDE_SIGNUP_FORM: "HIDE_SIGNUP_FORM",
  TOGGLE_SIGNUP_FORM: "TOGGLE_SIGNUP_FORM",
};

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}
