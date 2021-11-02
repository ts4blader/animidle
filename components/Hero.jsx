import React from "react";
import SubscribeForm from "./SubscribeForm";
import Header from "./Header";

Hero.defaultProps = {
  children: (
    <div className="content container">
      <h2 className="title">Unlimited movies, TV shows, and more.</h2>
      <p className="subtitle">Watch anywhere. Cancel anytime.</p>
      <div className="cta">
        <SubscribeForm />
      </div>
    </div>
  ),
  align: "center",
  bg: "fate.jpg",
};

export default function Hero({ children, bg, align }) {
  const style = {
    background: `url('/images/${bg}') no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
  };

  return (
    <section className="hero" style={style} data-content-align={align}>
      <Header />
      {children}
    </section>
  );
}
