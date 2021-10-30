import React, { useState, useCallback } from "react";
import Icon from "./Icon";
import { validateEmail } from "../libs/mixin";

export default function SubscribeForm() {
  const [hangIn, setHangIn] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validateEmail(email)) {
        alert("Thanks for subscribe my website!");
        setErrorMessage("");
        setEmail("");
      } else {
        setErrorMessage("Email is required!");
      }
    },
    [email]
  );

  return (
    <div className="subscribe-form">
      <div className="subscribe-form__head">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <form className="subscribe-form__body" onSubmit={handleSubmit}>
        <div className="input-text" data-hangin={hangIn}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setHangIn(true)}
            onBlur={() => {
              if (email.length == 0) setHangIn(false);
            }}
          />
          <p className="placeholder">Email</p>
        </div>
        <button className="cta-btn" type="submit">
          <p className="text">Get Started</p>
          <Icon src="caret.png" alt="arrow" />
        </button>

        {errorMessage && <p className="error-mes">{errorMessage}</p>}
      </form>
    </div>
  );
}
