import React, { useEffect, useState } from "react";
import { completeLoading, Loading } from "../animations/Loading";

const TOTAL_ANIMATION_TIME = 3000;
const ANIMATION_COMPLETE_DELAY = 2000;

export default function Loader() {
  const [screenWidth, setSreenWidth] = useState(0);
  const [soundDraw] = useState(
    typeof Audio !== "undefined" ? new Audio("/sounds/sword_draw.mp3") : null
  );
  const [soundCover] = useState(
    typeof Audio !== "undefined" ? new Audio("/sounds/sword_cover.mp3") : null
  );

  useEffect(() => {
    // Set screen width
    setSreenWidth(window.innerWidth);

    //* Checked for client side
    Loading(() => soundDraw?.play(), window.innerWidth);

    window.addEventListener("load", () => {
      window.requestAnimationFrame((time) => {
        setTimeout(() => {
          //* Checked for client side
          completeLoading(() => soundCover?.play(), window.innerWidth);
        }, TOTAL_ANIMATION_TIME - time + ANIMATION_COMPLETE_DELAY);
      });
    });
  }, []);

  return (
    <div className="loader" data-mobile={screenWidth < 768 ? true : false}>
      <div className="loader__bg"></div>
      <img src="/images/loading-screen.jpg" className="loader__overlay" />

      <div className="logo-wrapper">
        <div className="text">
          <p className="loading-text">loading...</p>
          <p className="logo">animidle</p>
        </div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
