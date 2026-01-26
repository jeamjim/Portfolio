'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface DecayCardProps {
  width?: number;
  height?: number;
  image?: string;
  children?: ReactNode;
}

const DecayCard: React.FC<DecayCardProps> = ({
  width = 300,
  height = 400,
  image = 'https://picsum.photos/300/400?grayscale',
  children,
}) => {
  const svgRef = useRef<HTMLDivElement | null>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement | null>(null);

  // 🚫 NEVER touch window here
  const cursor = useRef({ x: 0, y: 0 });
  const cachedCursor = useRef({ x: 0, y: 0 });
  const winsize = useRef({ width: 0, height: 0 });

  useEffect(() => {
    // ✅ Safe: browser only
    winsize.current = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    cursor.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    cachedCursor.current = { ...cursor.current };

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
    const map = (x: number, a: number, b: number, c: number, d: number) =>
      ((x - a) * (d - c)) / (b - a) + c;
    const distance = (x1: number, x2: number, y1: number, y2: number) =>
      Math.hypot(x1 - x2, y1 - y2);

    const handleResize = () => {
      winsize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    const handleMouseMove = (ev: MouseEvent) => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0,
    };

    let rafId: number;

    const render = () => {
      let targetX = lerp(
        imgValues.imgTransforms.x,
        map(cursor.current.x, 0, winsize.current.width, -120, 120),
        0.1
      );
      let targetY = lerp(
        imgValues.imgTransforms.y,
        map(cursor.current.y, 0, winsize.current.height, -120, 120),
        0.1
      );
      let targetRz = lerp(
        imgValues.imgTransforms.rz,
        map(cursor.current.x, 0, winsize.current.width, -10, 10),
        0.1
      );

      const bound = 50;
      targetX = Math.max(-bound, Math.min(bound, targetX));
      targetY = Math.max(-bound, Math.min(bound, targetY));

      imgValues.imgTransforms = { x: targetX, y: targetY, rz: targetRz };

      if (svgRef.current) {
        gsap.set(svgRef.current, {
          x: targetX,
          y: targetY,
          rotateZ: targetRz,
        });
      }

      const cursorDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );

      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        map(cursorDistance, 0, 200, 0, 400),
        0.06
      );

      if (displacementMapRef.current) {
        gsap.set(displacementMapRef.current, {
          attr: { scale: imgValues.displacementScale },
        });
      }

      cachedCursor.current = { ...cursor.current };
      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={svgRef}
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="relative w-full h-full block [will-change:transform]"
      >
        <filter id="imgFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="5"
            seed="4"
            stitchTiles="stitch"
            result="turbulence1"
          />

          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence1"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
          />

          {/* 🎨 Grayscale */}
          <feColorMatrix
            type="matrix"
            values="
              0.2126 0.7152 0.0722 0 0
              0.2126 0.7152 0.0722 0 0
              0.2126 0.7152 0.0722 0 0
              0      0      0      1 0
            "
          />
        </filter>

        <image
          href={image}
          x="0"
          y="0"
          width="600"
          height="750"
          filter="url(#imgFilter)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>

      <div className="absolute bottom-[1.2em] left-[1em] tracking-[-0.5px] font-black text-[2.5rem] leading-[1.5em] first-line:text-[6rem]">
        {children}
      </div>
    </div>
  );
};

export default DecayCard;
