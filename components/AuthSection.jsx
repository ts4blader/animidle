import React from "react";
import Icon from "./Icon";
import {
  signInGoogle,
  signInFacebook,
  signInGithub,
} from "../libs/FirebaseHelper";

export default function AuthSection() {
  return (
    <div className="auth">
      <div className="btn-facebook btn-icon" onClick={() => signInFacebook()}>
        <Icon src="facebook.png" alt="facebook" />
      </div>
      <div className="btn-google btn-icon" onClick={() => signInGoogle()}>
        <Icon src="google.png" alt="google" />
      </div>
      <div className="btn-github btn-icon" onClick={() => signInGithub()}>
        <Icon src="github.png" alt="github" />
      </div>
    </div>
  );
}
