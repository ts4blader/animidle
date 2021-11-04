import React, { useState } from "react";
import Slide from "./Slide";
import Screen from "./Screen";

export default function CategoryShow({ content }) {
  const { title, data } = content;
  const [item, setItem] = useState(null);

  console.log(data);

  return (
    <div className="category-show">
      <h3 className="title">{title}</h3>
      <Slide content={data} setItem={setItem} />
      {item && <Screen content={item} setItem={setItem} />}
    </div>
  );
}
