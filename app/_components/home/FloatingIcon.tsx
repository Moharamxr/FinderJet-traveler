import React from "react";

const FloatingIcon = ({ src, alt, style }: { src: string, alt: string, style: React.CSSProperties }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="floating-icon"
      style={style}
    />
  );
};

export default FloatingIcon;
