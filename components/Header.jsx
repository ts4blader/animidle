import React, { useEffect, useState, useContext } from "react";
import Icon from "./Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { StoreContext, ACTION } from "../store/Store";

export default function Header() {
  const [signin, setSignIn] = useState(false);
  const router = useRouter();
  const [state, dispatch] = useContext(StoreContext);

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
          <div
            className="btn sign-in mode-switch"
            onClick={() => {
              dispatch({ type: ACTION.TOGGLE_SIGNUP_FORM });
            }}
          >
            {state.showSignUpForm ? "Sign in" : "Sign up"}
          </div>
        </a>
      )}
    </header>
  );
}
