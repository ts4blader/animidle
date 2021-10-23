import React from "react";
import SubscribeForm from "./SubscribeForm";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="hero__content">
        <h2 className="title">Unlimited movies, TV shows, and more.</h2>
        <p className="subtitle">Watch anywhere. Cancel anytime.</p>
        <div className="hero__cta">
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
