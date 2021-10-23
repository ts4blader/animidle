import React from "react";

export default function Icon({ src, alt }) {
  return (
    <div className="icon">
      <img src={`/icons/${src}`} alt={alt} />
    </div>
  );
}
