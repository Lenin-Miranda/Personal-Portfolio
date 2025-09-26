"use client";
import React, { useRef } from "react";
import { cn } from "@/utils/cn"; // ⚠️ ajustamos esto abajo

export const CardContainer = ({ children, className, containerClassName }) => {
  return (
    <div className={cn("flex items-center justify-center", containerClassName)}>
      <div className={cn("relative group perspective", className)}>
        {children}
      </div>
    </div>
  );
};

export const CardBody = ({ children, className }) => {
  const ref = useRef(null);

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((y - midY) / midY) * -10;
    const rotateY = ((x - midX) / midX) * 10;
    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }

  function reset() {
    if (ref.current) {
      ref.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white/10 dark:bg-black/20 rounded-xl shadow-xl transition-transform duration-200 ease-out will-change-transform",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
};

export const CardItem = ({ children, translateZ = 0, className }) => {
  return (
    <div
      className={cn("transition-transform duration-200 ease-out", className)}
      style={{ transform: `translateZ(${translateZ}px)` }}
    >
      {children}
    </div>
  );
};
