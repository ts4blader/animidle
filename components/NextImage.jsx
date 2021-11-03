import React from "react";
import Image from "next/image";

export default function NextImage({ src, alt }) {
  return (
    <div className="next-image">
      <Image src={src} alt={alt} layout="fill" />
    </div>
  );
}
