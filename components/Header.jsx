import React from "react";
import Icon from "./Icon";
import Link from "next/link";

export default function Header({ signin = true }) {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <a>
            <Icon src="logo.jpg" alt="logo" />
          </a>
        </Link>
      </div>
      {signin && (
        <Link href="/signin">
          <a>
            <div className="btn sign-in">Sign in</div>
          </a>
        </Link>
      )}
      {!signin && (
        <a>
          <div className="btn sign-in mode-switch">Sign up</div>
        </a>
      )}
    </header>
  );
}
