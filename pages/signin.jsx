import React from "react";
import Header from "../components/Header";
import InputText from "../components/InputText";
import MyHead from "../components/MyHead";
import Footer from "../components/Footer";
import Icon from "../components/Icon";

export default function SignIn() {
  return (
    <>
      <div className="sign-in-page">
        {/* Head */}
        <MyHead title="Sign in page - Animidle" />

        <Header signin={false} />
        <section className="sign-in-page__content container">
          <form className="sign-in-form">
            <div className="sign-in-form__head">Login</div>
            <div className="email-field field">
              <InputText placeholder="Email" />
            </div>
            <div className="password-field field">
              <InputText placeholder="Password" type="password" />
            </div>
            <button type="submit" className="btn-submit">
              Sign in
            </button>
            <hr />
            <div className="sign-in-form__foot">
              <p>Or Sign in with</p>
              <div className="auth">
                <div className="btn-facebook btn-icon">
                  <Icon src="facebook.png" alt="facebook" />
                </div>
                <div className="btn-google btn-icon">
                  <Icon src="google.png" alt="google" />
                </div>
                <div className="btn-github btn-icon">
                  <Icon src="github.png" alt="github" />
                </div>
              </div>
              <h3 className="sign-up-cta">
                New to Animidle? <span className="link">Sign up now</span>
              </h3>
            </div>
          </form>
        </section>
      </div>
      <div className="divider"></div>
      <Footer />
    </>
  );
}
