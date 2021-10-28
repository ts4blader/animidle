import React, { useContext } from "react";
import Header from "../components/Header";
import MyHead from "../components/MyHead";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { StoreContext } from "../store/Store";

export default function SignIn() {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <>
      <div className="sign-in-page">
        {/* Head */}
        <MyHead title="Sign in page - Animidle" />

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
