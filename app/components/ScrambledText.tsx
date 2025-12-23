"use client";

import {
  useEffect,
  useRef,
  PropsWithChildren,
  CSSProperties,
} from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

type ScrambledTextProps = {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: CSSProperties;
};

const ScrambledText = ({
  radius = 20,
  duration = 3.2,
  speed = 0.9,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}: PropsWithChildren<ScrambledTextProps>) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targetElement = root.querySelector<HTMLElement>("*");
    if (!targetElement) return;

    const split = SplitText.create(targetElement, {
      type: "words,chars",
      wordsClass: "inline-block",
      charsClass: "inline-block will-change-transform",
    });

    // ✅ DO NOT TYPE THE PARAMETER
    split.chars.forEach((char) => {
      if (!(char instanceof HTMLElement)) return;

      const width = char.offsetWidth;
      gsap.set(char, {
        attr: { "data-content": char.innerHTML },
        display: "inline-block",
        width,
        whiteSpace: "pre",
        overflow: "hidden",
      });
    });

    const handleMove = (e: PointerEvent) => {
      split.chars.forEach((char) => {
        if (!(char instanceof HTMLElement)) return;

        const { left, top, width, height } = char.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const distance = Math.hypot(dx, dy);

        if (distance < radius) {
          gsap.to(char, {
            overwrite: true,
            duration: duration * (1 - distance / radius),
            scrambleText: {
              text: char.dataset.content ?? "",
              chars: scrambleChars,
              speed,
            },
            ease: "none",
          });
        }
      });
    };

    root.addEventListener("pointermove", handleMove);

    return () => {
      root.removeEventListener("pointermove", handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div
      ref={rootRef}
      className={`max-w-[800px] font-mono text-[clamp(14px,4vw,32px)] text-white scrambled-text-demo ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrambledText;
