import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import Slide from "./Slide";
import Screen from "./Screen";
import { useStore } from "../store/Store";

export default function CategoryShow({ content }) {
  const { title, data } = content;
  const [slideData, setSlideData] = useState([]);
  const [item, setItem] = useState(null);
  const [showScreen, setShowScreen] = useState(false);
  const [state, dispatch] = useStore();

  useEffect(() => {
    setSlideData(data);
  }, [data]);

  useEffect(() => {
    const fuse = new Fuse(data, {
      keys: ["title", "description"],
    });

    if (state.searchTerm.length > 2 && data.length > 0) {
      const result = fuse.search(state.searchTerm).map((item) => item.item);
      setSlideData(result);
    } else {
      setSlideData(data);
    }
  }, [state.searchTerm, data]);

  return (
    <div className="category-show">
      <h3 className="title">{title}</h3>
      <Slide
        content={slideData}
        setItem={setItem}
        setShowScreen={setShowScreen}
      />
      <Screen
        content={item}
        showScreen={showScreen}
        setShowScreen={setShowScreen}
      />
    </div>
  );
}
