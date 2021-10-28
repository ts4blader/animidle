import React, { useState, useContext } from "react";
import Icon from "./Icon";
import InputText from "./InputText";
import { StoreContext, ACTION } from "../store/Store";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [state, dispatch] = useContext(StoreContext);

  return (
    <form className="sign-up-form" onSubmit={() => {}}>
      <div className="sign-up-form__head">Sign Up</div>
      <div className="email-field field">
        <InputText text={email} setText={setEmail} placeholder="Email" />
      </div>
      <div className="password-field field">
        <InputText
          text={password}
          setText={setPassword}
          placeholder="Password"
          type="password"
        />
      </div>
      <div className="repassword-field field">
        <InputText
          text={rePassword}
          setText={setRePassword}
          placeholder="Retype Your Password"
          type="password"
        />
      </div>
      <button type="submit" className="btn-submit">
        Sign Up
      </button>
      <hr />
      <div className="sign-in-form__foot">
        <p>Or Sign in with</p>
        <div className="auth">
          <div className="btn-facebook btn-icon">
            <Icon src="facebook.png" alt="facebook" />
          </div>
          <div className="btn-google btn-icon">
            <Icon src="google.png" alt="google" />
          </div>
          <div className="btn-github btn-icon">
            <Icon src="github.png" alt="github" />
          </div>
        </div>
        <h3 className="sign-up-cta">
          Already have account{" "}
          <span
            className="link"
            onClick={() => {
              dispatch({ type: ACTION.HIDE_SIGNUP_FORM });
            }}
          >
            Sign in now
          </span>
        </h3>
      </div>
    </form>
  );
}
