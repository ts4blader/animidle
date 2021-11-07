import React, { useState } from "react";
import Icon from "./Icon";
import {
  auth,
  google,
  github,
  facebook,
  ERROR_CODE,
} from "../libs/FirebaseHelper";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

export default function AuthSection() {
  const [error, setError] = useState("");
  const router = useRouter();

  const signIn = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        router.prefetch("/browse");
        router.push("/browse");
      })
      .catch((error) => {
        if (error.code === ERROR_CODE.ACCOUNT_EXISTING) {
          setError("Account already exists with different credential");
        }
      });
  };

  return (
    <>
      {error && <div className="error-message">{error}</div>}
      <div className="auth">
        <div className="btn-facebook btn-icon" onClick={() => signIn(facebook)}>
          <Icon src="facebook.png" alt="facebook" />
        </div>
        <div className="btn-google btn-icon" onClick={() => signIn(google)}>
          <Icon src="google.png" alt="google" />
        </div>
        <div className="btn-github btn-icon" onClick={() => signIn(github)}>
          <Icon src="github.png" alt="github" />
        </div>
      </div>
    </>
  );
}
