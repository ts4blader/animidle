import React, { useState, useEffect } from "react";

export default function InputText({
  placeholder,
  text,
  setText = null,
  type = "text",
  required = true,
}) {
  const [hangIn, setHangIn] = useState(false);

  useEffect(() => {
    if (text.length === 0) setHangIn(false);
    else setHangIn(true);
  }, [text]);

  return (
    <div className="input-text" data-hangIn={hangIn}>
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
