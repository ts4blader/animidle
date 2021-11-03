import React from "react";
import Image from "next/image";

export default function Card({ content }) {
  const { thumbnail, title } = content;

  return (
    <div className="card">
      <Image src={thumbnail} alt={title} width="1280" height="720" />
      <div className="overlay"></div>
      <h4 className="title">{title}</h4>
    </div>
  );
}
