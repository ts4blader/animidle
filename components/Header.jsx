import React, { useEffect, useState, useContext } from "react";
import ReacDOM from "react-dom";
import Link from "next/link";
import Icon from "./Icon";
import { useRouter } from "next/router";
import { AuthContext } from "../pages/_app";
import { logOut } from "../libs/FirebaseHelper";
import { StoreContext, ACTION } from "../store/Store";

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
  const [state, dispatch] = useContext(StoreContext);

  return (
    <div className="user-panel">
      <div className="search-box" data-show={show}>
        <Icon src="search.png" alt="" onClick={() => setShow(!show)} />
        <input
          type="text"
          placeholder="Films name"
          value={state.searchTerm}
          onChange={(e) => {
            dispatch({ type: ACTION.SET_SEARCH_TERM, payload: e.target.value });
          }}
          onBlur={() => setShow(false)}
        />
      </div>
      <div className="user-dropdown" data-show-dropdown={showDropdown}>
        {showDropdown
          ? ReacDOM.createPortal(
              <div
                className="overlay"
                style={{ zIndex: 4 }}
                onClick={() => setShowDropdown(false)}
              ></div>,
              document.body
            )
          : null}
        <div className="agent" onClick={() => setShowDropdown(!showDropdown)}>
          <img src={authUser.photoURL} alt="avatar" />
        </div>
        <div className="dropdown-items">
          <div className="item">
            {authUser.displayName ? authUser.displayName : authUser.email}
          </div>
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
