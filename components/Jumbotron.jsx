import React from "react";
import NextImage from "./NextImage";

export default function Jumbotron({ content }) {
  return (
    <div className="jumbotron" data-direction={content.direction}>
      <div className="jumbotron__content">
        <h3 className="title">{content.title}</h3>
        <p className="subtitle">{content.subTitle}</p>
      </div>
      <div className="jumbotron__divider"></div>
      <div className="jumbotron__img">
        <NextImage
          src={content.image}
          alt={content.alt}
          width="600"
          height="338"
        />
      </div>
    </div>
  );
}
