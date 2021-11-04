import React from "react";
import RouteProtector from "../components/RouteProtector";
import MyHead from "../components/MyHead";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CategoryShow from "../components/CategoryShow";
import useFilmsData from "../libs/useFilmsData";

export default function Browse() {
  const { films } = useFilmsData();

  return (
    <>
      {/* Meta */}
      <MyHead title="Browse Page - Animidle" />
      <RouteProtector loggedPath="/browse" unLoggedPath="/signin" />
      {/* Content */}
      <div className="browse-page">
        <Hero align="start" bg="megumin.jpg">
          <div className="content">
            <h2 className="title">Watch KONOSUBA now</h2>
            <p className="subtitle">
              When Kazuma Satou died, he was given two choices: pass on to
              heaven or be revived in a fantasy world. After choosing the new
              world, the goddess Aqua tasked him with defeating the Demon King,
              and let him choose any weapon to aid him. Unfortunately, Kazuma
              chose to bring Aqua herself and has regretted
            </p>
            <div className="cta btn">Play</div>
          </div>
        </Hero>

        <div className="categories-show">
          {films.map((item, index) => {
            return <CategoryShow content={item} key={index} />;
          })}
        </div>
      </div>

      <div className="divider"></div>
      <Footer />
    </>
  );
}
