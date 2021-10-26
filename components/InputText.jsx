import React from "react";

export default function InputText({
  placeholder,
  text,
  setText = null,
  type = "text",
}) {
  return (
    <div className="input-text">
      <input
        type={type}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="placeholder">{placeholder}</div>
    </div>
  );
}
