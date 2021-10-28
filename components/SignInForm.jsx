import React, { useState } from "react";
import Icon from "./Icon";
import InputText from "./InputText";

export default function SignInForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <form className="sign-in-form" onSubmit={() => {}}>
      <div className="sign-in-form__head">Login</div>
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
          New to Animidle? <span className="link">Sign up now</span>
        </h3>
      </div>
    </form>
  );
}
