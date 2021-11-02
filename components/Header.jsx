import React, { useEffect, useState, useContext } from "react";
import Icon from "./Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../pages/_app";
import { logOut } from "../libs/AuthHelper";

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
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="user-panel">
      <div className="search-box" data-show={show}>
        <Icon src="search.png" alt="" onClick={() => setShow(!show)} />
        <input
          type="text"
          placeholder="Films name"
          onBlur={() => setShow(false)}
        />
      </div>
      <div className="user-dropdown" data-show-dropdown={showDropdown}>
        <div className="agent" onClick={() => setShowDropdown(!showDropdown)}>
          <Icon src={`user-${authUser.photoURL}.png`} alt="avatar" />
        </div>
        <div className="dropdown-items">
          <div className="item">{authUser.email}</div>
          <div className="item" onClick={() => logOut()}>
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [right, setRight] = useState(<SignIn />);
  const router = useRouter();
  const authUser = useContext(AuthContext) || {};

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
