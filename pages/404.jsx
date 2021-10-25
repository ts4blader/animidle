import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Icon from "../components/Icon";
import MyHead from "../components/MyHead";

export default function NotFound() {
  return (
    <div className="notfound-page">
      {/* Meta Head */}
      <MyHead title="Not Found Page - Animidle" />

      <Header />
      <div className="notfound-page__content container">
        <h2 className="title">Huh? Lost your way?</h2>
        <p className="subtitle">
          Sorry, we can not find that page. You will find lots to explore on our
          homepage
        </p>
        <div className="cta-btn">
          <Link href="/">
            <a>
              <Icon src="caret.png" alt="caret" />
              <p>Home</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
