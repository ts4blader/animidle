import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../libs/AuthHelper";

const SignIn = () => {
  return (
    <Link href="/signin">
      <a>
        <div className="btn sign-in">Sign in</div>
      </a>
    </Link>
  );
};

const UserPanel = ({ authUser }) => {
  return (
    <div className="user-panel">
      <div className="search-bar">
        <Icon src="search.png" alt="" />
        <input type="text" />
      </div>
      <div className="user-dropdown">
        <div className="agent">
          <Icon src={`user-${authUser.photoURL}.png`} alt="avatar" />
        </div>
        <div className="dropdown-items">
          <div className="item">{authUser.email}</div>
          <div className="item">Sign out</div>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [right, setRight] = useState(<SignIn />);
  const router = useRouter();
  const authUser = auth.currentUser || {};

  useEffect(() => {
    if (router.pathname === "/browse") {
      setRight(<UserPanel authUser={authUser} />);
    }
    if (router.pathname === "/signin") {
      setRight("");
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
      {right}
    </header>
  );
}
