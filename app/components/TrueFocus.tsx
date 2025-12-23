import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Bokor } from "next/font/google"; 
import colmeak from "next/font/local"; 
import oughter from "next/font/local"; 
import qarinthen from "next/font/local"; 
import dirtylane from "next/font/local"; 
import midfielder from "next/font/local"; 
import hourglass from "next/font/local"; 





  const bokorFont = Bokor({
    subsets: ["latin"], 
    weight: "400",
  });

  const Hourglass = hourglass({
    src: "../../public/fonts/Hourglass.otf",
  });

  const Colmeak = colmeak({
    src: "../../public/fonts/Colmeak.otf",
  });

  const Oughter = oughter({
    src: "../../public/fonts/Oughter.otf",
  });

  const Qarinthen = qarinthen({
    src: "../../public/fonts/Qarinthen.otf",
  });

  const Dirtylane = dirtylane({
    src: "../../public/fonts/Dirtylane.otf",
  });

   const Midfielder = midfielder({
    src: "../../public/fonts/Midfielder.otf",
  });




  

interface TrueFocusProps {
  sentence?: string;
  animationDuration?: number;
  wordSpacing?: number; // horizontal spacing (px)
  lineSpacing?: "tight" | "normal" | "relaxed" | "loose" | number; // line height
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "STUNNING SOLUTIONS FOR CRITICAL PROBLEMS",
  animationDuration = 0.5,
  wordSpacing = 15,
  lineSpacing = "tight",
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (currentIndex === null) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    // Keep the last hovered word focused, don’t reset
  };

  // Map lineSpacing to Tailwind classes
  const lineHeightClass =
    typeof lineSpacing === "string"
      ? {
          tight: "leading-tight",
          normal: "leading-normal",
          relaxed: "leading-relaxed",
          loose: "leading-loose",
        }[lineSpacing]
      : undefined;

      useEffect(() => {
          AOS.init({
            duration: 950,
            once: true,
            easing: "ease-out-cubic",
          });
        }, []);
      

  return (
    <div
      className={`relative flex flex-wrap justify-center items-center ${lineHeightClass ?? ""}`}
      ref={containerRef}
      style={{ gap: `${wordSpacing}px` }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className={`relative text-[3rem] font-black cursor-pointer transition-colors duration-300 ${Qarinthen.className}`} //edit text from main page
            data-aos-delay="400"
            data-aos="fade" 
            style={{
              color: isActive ? "white" : "gray",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex !== null ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
      >
        {/* White focus brackets */}
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
          style={{
            borderColor: "white",
            filter: "drop-shadow(0 0 4px white)",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
          style={{
            borderColor: "white",
            filter: "drop-shadow(0 0 4px white)",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
          style={{
            borderColor: "white",
            filter: "drop-shadow(0 0 4px white)",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
          style={{
            borderColor: "white",
            filter: "drop-shadow(0 0 4px white)",
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
