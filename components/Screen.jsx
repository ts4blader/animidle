import React from "react";
import Image from "next/image";
import Icon from "./Icon";

Screen.defaultProps = {
  content: {},
  setItem: () => {},
};

export default function Screen({ content, setItem }) {
  const { thumbnail, title, description, genres } = content || "";

  const style = {
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div className="screen" style={style} data-show={content ? true : false}>
      <div className="close-btn">
        <Icon src="close.png" alt="Close" onClick={() => setItem(null)} />
      </div>
      <div className="overlay"></div>
      <div className="screen__text">
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
        <div className="btn play-btn">Play</div>
      </div>
    </div>
  );
}
