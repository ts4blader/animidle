import React from "react";

export default function InputText({
  placeholder,
  text,
  setText = null,
  type = "text",
  required = true,
}) {
  return (
    <div className="input-text">
      <input
        type={type}
        value={text}
        onChange={(e) => setText(e.target.value)}
        required={required}
      />
      <div className="placeholder">{placeholder}</div>
    </div>
  );
}
