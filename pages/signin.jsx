import React from "react";
import Header from "../components/Header";
import InputText from "../components/InputText";
import MyHead from "../components/MyHead";
import Footer from "../components/Footer";

export default function SignIn() {
  return (
    <>
      <div className="sign-in-page">
        {/* Head */}
        <MyHead title="Sign in page - Animidle" />

        <Header signin={false} />
        <section className="sign-in-page__content container">
          <form className="sign-in-form">
            <div className="sign-in-form__head">Sign in</div>
            <div className="email-field field">
              <InputText placeholder="Email" />
            </div>
            <div className="password-field field">
              <InputText placeholder="Password" type="password" />
            </div>
            <button type="submit" className="btn-submit">
              Sign in
            </button>
          </form>
        </section>
      </div>
      <div className="divider"></div>
      <Footer />
    </>
  );
}
