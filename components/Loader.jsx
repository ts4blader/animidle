import React, { useEffect, useState } from "react";
import { completeLoading, Loading } from "../animations/Loading";

const TOTAL_ANIMATION_TIME = 3000;
const ANIMATION_COMPLETE_DELAY = 2000;

export default function Loader() {
  const [screenWidth, setSreenWidth] = useState(0);
  const [soundDraw, setSoundDraw] = useState(null);
  const [soundCover, setSoundCover] = useState(null);

  useEffect(() => {
    // Load sound from public folder
    setSoundDraw(new Audio("/sounds/sword_draw.mp3"));
    setSoundCover(new Audio("/sounds/sword_draw.mp3"));
    // Set screen width
    setSreenWidth(window.innerWidth);

    //* Checked for client side
    if (soundDraw != null) Loading(() => soundDraw.play(), window.innerWidth);
    else Loading(null, window.innerWidth);

    window.addEventListener("load", () => {
      window.requestAnimationFrame((time) => {
        setTimeout(() => {
          //* Checked for client side
          if (soundCover != null)
            completeLoading(() => soundCover.play(), window.innerWidth);
          else completeLoading(null, window.innerWidth);
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
