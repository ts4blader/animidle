import React, { useState, useContext } from "react";
import AuthSection from "./AuthSection";
import InputText from "./InputText";
import { validateEmail, validatePassword } from "../libs/mixin";
import { signUp, ERROR_CODE, updateUser } from "../libs/AuthHelper";
import { StoreContext, ACTION } from "../store/Store";
import { useRouter } from "next/router";

export default function SignUpForm() {
  const router = useRouter();

  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [rePassword, setRePassword] = useState("");
  const [rePasswordError, setRePasswordError] = useState(false);

  const [state, dispatch] = useContext(StoreContext);

  const validate = () => {
    //* Email validate
    if (!validateEmail(email)) {
      setEmailError(true);
      return false;
    }
    //* Password validate
    if (!validatePassword(password)) {
      setPasswordError(true);
      return false;
    }
    //* Repassword validate
    if (password !== rePassword) {
      setRePasswordError(true);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //* Handle Sign up success
    const handleSuccess = (user) => {
      updateUser(user, () => {
        // set errors to false
        setPasswordError(false);
        setEmailError(false);
        setRePasswordError(false);
        // clear all field
        setPassword("");
        setEmail("");
        setRePassword("");

        router.push("/browse");
      });
    };

    //* Handle Sign up Error
    const handleError = (error) => {
      if (error === ERROR_CODE.EMAIL_ALREADY_EXISTS) {
        setError("Email already in use!");
      }
    };

    if (validate()) {
      signUp(email, password, handleSuccess, handleError);
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <div className="sign-up-form__head">Sign Up</div>
      {error && <div className="error-message">{error}</div>}
      <div className="email-field field">
        <InputText text={email} setText={setEmail} placeholder="Email" />
        {emailError && (
          <div className="email-error error">Email is not valid</div>
        )}
      </div>
      <div className="password-field field">
        <InputText
          text={password}
          setText={setPassword}
          placeholder="Password"
          type="password"
        />
        {passwordError && (
          <div className="password-error error">
            At least 8 characters required!
          </div>
        )}{" "}
      </div>
      <div className="repassword-field field">
        <InputText
          text={rePassword}
          setText={setRePassword}
          placeholder="Retype Your Password"
          type="password"
        />
        {rePasswordError && (
          <div className="repassword-error error">Not match password!</div>
        )}
      </div>
      <button type="submit" className="btn-submit">
        Sign Up
      </button>
      <hr />
      <div className="sign-in-form__foot">
        <p>Or Sign in with</p>
        <AuthSection />
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
