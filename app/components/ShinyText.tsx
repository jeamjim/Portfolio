"use client";

import "./ShinyText.css";
import { CSSProperties } from "react";

type ShinyTextProps = {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
};

const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}: ShinyTextProps) => {
  const animationDuration = `${speed}s`;

  const style: CSSProperties = {
    animationDuration,
  };

  return (
    <div
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={style}
    >
      {text}
    </div>
  );
};

export default ShinyText;
