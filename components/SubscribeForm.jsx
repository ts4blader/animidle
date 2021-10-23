import React, { useState } from "react";
import Icon from "./Icon";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  return (
    <div className="subscribe-form">
      <div className="subscribe-form__head">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <form className="subscribe-form__body">
        <div className="input">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="placeholder">Email</p>
        </div>
        <div className="cta-btn">
          <p className="text">Get Started</p>
          <Icon src="caret.png" alt="arrow" />
        </div>
      </form>
    </div>
  );
}
