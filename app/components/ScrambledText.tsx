import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  radius = 20,
  duration = 3.2,
  speed = 0.9,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const targetElement = rootRef.current.querySelector("*");
    if (!targetElement) return;

    const split = SplitText.create(targetElement, {
      type: "words,chars",
      wordsClass: "inline-block",
      charsClass: "inline-block will-change-transform",
    });

    // ✅ Lock width for each character to prevent layout shift
    split.chars.forEach((c) => {
      const w = c.offsetWidth; // measure width before animation
      gsap.set(c, {
        attr: { "data-content": c.innerHTML },
        display: "inline-block",
        width: w, // lock width
        whiteSpace: "pre", // keep spaces visible
        overflow: "hidden", // hide overflow
      });
    });

    const handleMove = (e) => {
      split.chars.forEach((c) => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || "",
              chars: scrambleChars,
              speed,
            },
            ease: "none",
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener("pointermove", handleMove);

    return () => {
      el.removeEventListener("pointermove", handleMove);
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
