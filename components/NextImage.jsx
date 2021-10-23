import React from "react";
import Image from "next/image";

export default function NextImage({ src, alt, width, height }) {
  return (
    <div className="next-image">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
