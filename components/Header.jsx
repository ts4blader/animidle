import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [signin, setSignIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/signin") {
      setSignIn(true);
    }
  }, [router.pathname]);

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <a>
            <Icon src="logo.jpg" alt="logo" />
          </a>
        </Link>
      </div>
      {!signin && (
        <Link href="/signin">
          <a>
            <div className="btn sign-in">Sign in</div>
          </a>
        </Link>
      )}
      {signin && (
        <a>
          <div className="btn sign-in mode-switch">Sign up</div>
        </a>
      )}
    </header>
  );
}
