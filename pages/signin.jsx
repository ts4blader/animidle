import React, { useState } from "react";
import Header from "../components/Header";
import MyHead from "../components/MyHead";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
  return (
    <>
      <div className="sign-in-page">
        {/* Head */}
        <MyHead title="Sign in page - Animidle" />

        <Header />
        <section className="sign-in-page__content container">
          <SignInForm />
        </section>
      </div>
      <div className="divider"></div>
      <Footer />
    </>
  );
}
