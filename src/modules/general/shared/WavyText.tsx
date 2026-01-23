"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function WavyText({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;
      const wavyText = containerRef.current.querySelector(".wavy")!;
      const { chars } = splitText(wavyText);
      containerRef.current.style.visibility = "visible";

      const staggerDelay = 0.15;

      animate(
        chars,
        { y: [-5, 5] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(
            staggerDelay,
            // By setting this as a negative delay we can start
            // the animation part-way through, to ensure we don't
            // get an initial iteration where the characters look
            // like they're starting to animate one by one.
            { startDelay: -staggerDelay * chars.length }
          ),
        }
      );
    });
  }, []);

  return (
    <span className="wavy-text-container" ref={containerRef}>
      <span className="wavy">{children}</span>
      <Stylesheet />
    </span>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .wavy-text-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                visibility: hidden;
            }

            .split-char {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
