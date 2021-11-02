import React from "react";
import Link from "next/link";
import { logOut } from "../libs/AuthHelper";
import RouteProtector from "../components/RouteProtector";
import MyHead from "../components/MyHead";
import Hero from "../components/Hero";

export default function Browse() {
  return (
    <>
      {/* Meta */}
      <MyHead title="Browse Page - Animidle" />
      <RouteProtector
        unLoggedPath="/signin"
        message="You must loged in to browse this page"
      />
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
        <Link href="/">Home</Link>
        <p onClick={() => logOut()}>Log Out</p>
      </div>
    </>
  );
}
