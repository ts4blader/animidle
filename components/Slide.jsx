import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Slide({ content = [], setItem, setShowScreen }) {
  const handleClick = (index) => {
    setItem(content[index]);
    setShowScreen(true);
  };
  const [options, setOptions] = useState({
    perPage: 5,
  });

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setOptions({
        perPage: 1,
        padding: "10rem",
      });
    }
    if (window.innerWidth <= 480) {
      setOptions({
        perPage: 1,
        padding: "5rem",
      });
    }
  }, []);

  return (
    <>
      <Splide
        className="slide"
        options={{
          ...options,
          type: "loop",
          gap: "1rem",
          perMove: 1,
          autoplay: true,
          interval: 10000,
          pauseOnHover: true,
          isNavigation: false,
        }}
      >
        {content.length === 0 ? (
          <p className="no-result">No result!</p>
        ) : (
          content.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <Card content={item} onClick={() => handleClick(index)} />
              </SplideSlide>
            );
          })
        )}
      </Splide>
    </>
  );
}
