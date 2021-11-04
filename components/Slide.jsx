import React from "react";
import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Slide({ content = [], setItem }) {
  return (
    <Splide
      className="slide"
      options={{
        rewind: true,
        gap: "1rem",
        perPage: 5,
        perMove: 1,
        autoplay: true,
        interval: 10000,
        pauseOnHover: true,
        isNavigation: false,
      }}
    >
      {content.map((item, index) => {
        return (
          <SplideSlide key={index}>
            <Card content={item} onClick={() => setItem(content[index])} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
