import React from "react";
import Header from "../components/Header";
import MyHead from "../components/MyHead";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import RouteProtector from "../components/RouteProtector";
import { useStore } from "../store/Store";

export default function SignIn() {
  const [state, dispatch] = useStore();

  return (
    <>
      {/* Head */}
      <MyHead title="Sign in page - Animidle" />
      <RouteProtector loggedPath="/browse" unLoggedPath="/signin" />
      <div className="sign-in-page">
        <Header />
        <section className="sign-in-page__content container">
          {state.showSignUpForm ? <SignUpForm /> : <SignInForm />}
        </section>
      </div>
      <div className="divider"></div>
      <Footer />
    </>
  );
}
