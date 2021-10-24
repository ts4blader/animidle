import React from "react";
import Icon from "./Icon";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>
            <Icon src="logo.jpg" alt="logo" />
          </a>
        </Link>
      </div>
      <Link href="/signin">
        <a>
          <div className="btn sign-in">Sign in</div>
        </a>
      </Link>
    </header>
  );
}
