"use client";

import { useEffect, useState } from "react";

export default function BlogReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId: number | null = null;

    const calculateProgress = () => {
      const article = document.querySelector<HTMLElement>(
        "[data-blog-article]",
      );

      if (!article) {
        setProgress(0);
        setIsVisible(false);
        return;
      }

      const rect = article.getBoundingClientRect();

      const articleTop = window.scrollY + rect.top;
      const articleBottom = articleTop + article.offsetHeight;

      const readingPosition =
        window.scrollY + window.innerHeight * 0.32;

      const totalReadableDistance = Math.max(
        articleBottom - articleTop - window.innerHeight * 0.35,
        1,
      );

      const currentReadableDistance =
        readingPosition - articleTop;

      const calculatedProgress =
        (currentReadableDistance / totalReadableDistance) * 100;

      const normalizedProgress = Math.min(
        100,
        Math.max(0, calculatedProgress),
      );

      setProgress(normalizedProgress);

      setIsVisible(
        readingPosition >= articleTop - 100 &&
          window.scrollY < articleBottom,
      );
    };

    const handleUpdate = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(
        calculateProgress,
      );
    };

    calculateProgress();

    window.addEventListener("scroll", handleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", handleUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener(
        "scroll",
        handleUpdate,
      );

      window.removeEventListener(
        "resize",
        handleUpdate,
      );
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 top-[122px] z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="h-1 w-full bg-primary-blue/15 shadow-sm">
        <div
          className="h-full origin-left bg-primary-red shadow-[0_0_12px_rgba(194,17,25,0.65)]"
          style={{
            transform: `scaleX(${progress / 100})`,
            transition: "transform 100ms linear",
          }}
        />
      </div>
    </div>
  );
}