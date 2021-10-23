import React from "react";

export default function Image({ src, alt }) {
  return (
    <div className="image">
      <img src={`/images/${src}`} alt={alt} />
    </div>
  );
}
