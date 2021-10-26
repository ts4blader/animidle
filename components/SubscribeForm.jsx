import React, { useState, useCallback } from "react";
import Icon from "./Icon";

const validateEmail = (emailAdress) => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) return true;
  else return false;
};

export default function SubscribeForm() {
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
        <div className="input-text">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="placeholder">Email</p>
        </div>
        <button className="cta-btn" type="submit">
          <p className="text">Get Started</p>
          <Icon src="caret.png" alt="arrow" />
        </button>

        <p className="error-mes">{errorMessage}</p>
      </form>
    </div>
  );
}
