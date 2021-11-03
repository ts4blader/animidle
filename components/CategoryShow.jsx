import React, { useState } from "react";
import Slide from "./Slide";
import Screen from "./Screen";

export default function CategoryShow({ content }) {
  const { title, data } = content;

  const [screenShow, setScreenShow] = useState(false);
  const setItemShow = (index) => {};
  return (
    <div className="category-show">
      <h3 className="title">{title}</h3>
      <Slide content={data} setItemShow={setItemShow} />
      {/* <Screen content={data} show={screenShow} setShow={setScreenShow} /> */}
    </div>
  );
}
