import React, { useEffect, useState, useContext } from "react";
import Fuse from "fuse.js";
import Slide from "./Slide";
import Screen from "./Screen";
import { StoreContext } from "../store/Store";

export default function CategoryShow({ content }) {
  const { title, data } = content;
  const [slideData, setSlideData] = useState([]);
  const [item, setItem] = useState(null);
  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    setSlideData(data);
  }, [data]);

  useEffect(() => {
    const fuse = new Fuse(data, {
      keys: ["title", "description"],
    });
    if (state.searchTerm.length > 2) {
      const result = fuse.search(state.searchTerm).map((item) => item);
      setSlideData(result);
    } else {
      setSlideData(data);
    }
  }, [state.searchTerm]);

  return (
    <div className="category-show">
      <h3 className="title">{title}</h3>
      <Slide content={slideData} setItem={setItem} />
      <Screen content={item} setItem={setItem} />
    </div>
  );
}
