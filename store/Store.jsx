import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";
import { firebase } from "../libs/FirebaseHelper";

export const StoreContext = createContext(null);
// Initial state
const INITIAL_STATE = {
  showSignUpForm: false,
  searchTerm: "",
  firebase,
  showPlayer: false,
  showScreen: false,
};
//Action
export const ACTION = {
  SHOW_SIGNUP_FORM: "SHOW_SIGNUP_FORM",
  HIDE_SIGNUP_FORM: "HIDE_SIGNUP_FORM",
  SHOW_PLAYER: "SHOW_PLAYER",
  HIDE_PLAYER: "HIDE_PLAYER",
  SHOW_SCREEN: "SHOW_SCREEN",
  HIDE_SCREEN: "HIDE_SCREEN",
  TOGGLE_SIGNUP_FORM: "TOGGLE_SIGNUP_FORM",
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}
