import React from "react";

export default function Icon({ src, alt, onClick }) {
  return (
    <div className="icon" onClick={onClick}>
      <img src={`/icons/${src}`} alt={alt} />
    </div>
  );
}
