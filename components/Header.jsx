import React from "react";
import Icon from "./Icon";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Icon src="logo.jpg" alt="logo" />
      </div>
      <div className="btn sign-in">Sign in</div>
    </header>
  );
}
