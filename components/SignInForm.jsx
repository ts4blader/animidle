import React, { useState, useContext } from "react";
import AuthSection from "./AuthSection";
import InputText from "./InputText";
import { signIn, logOut, ERROR_CODE } from "../libs/AuthHelper";
import { StoreContext, ACTION } from "../store/Store";
import { useRouter } from "next/router";

export default function SignInForm() {
  const router = useRouter();

  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, dispatch] = useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //* Handle Sign In  Error
    let handleError = (error) => {
      if (error === ERROR_CODE.INVALID_EMAIL) {
        setError("Invalid Email!");
      }
      if (error === ERROR_CODE.WRONG_PASSWORD) {
        setError("Wrong password!");
      }
    };
    //* Handle Sign In Success
    let handleSuccess = (user) => {
      setEmail("");
      setPassword("");
      setError("");
      router.push("/browse");
    };

    signIn(email, password, handleSuccess, handleError);
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <div className="sign-in-form__head">Login</div>
      {error && <p className="error-message">{error}</p>}
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
      <button type="submit" className="btn-submit">
        Sign in
      </button>
      <hr />
      <div className="sign-in-form__foot">
        <p>Or Sign in with</p>
        <AuthSection />
        <h3 className="sign-up-cta">
          New to Animidle?{" "}
          <span
            className="link"
            onClick={() => {
              dispatch({ type: ACTION.SHOW_SIGNUP_FORM });
            }}
          >
            Sign up now
          </span>
        </h3>
      </div>
    </form>
  );
}
