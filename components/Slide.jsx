import React, { useContext } from "react";
import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { StoreContext, ACTION } from "../store/Store";

export default function Slide({ content = [], setItem }) {
  const [state, dispatch] = useContext(StoreContext);

  const handleClick = (index) => {
    dispatch({ type: ACTION.SHOW_SCREEN });
    setItem(content[index]);
  };

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
            <Card content={item} onClick={() => handleClick(index)} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
