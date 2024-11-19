import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const diameter = 60;
  const radius = diameter / 2;
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursorRef.current, {
        x: clientX - radius,
        y: clientY - radius,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [radius,diameter]);

  return (
    <div
      ref={cursorRef}
      style={{
        pointerEvents: "none",
        width: `${diameter}px`,
        height: `${diameter}px`,
        borderRadius: "50%",
        backgroundColor: "rgba(255, 0, 0, 0.7)", // Optional: background color
        position: "fixed",
        zIndex: 500,
      }}
    />
  );
};

export default Cursor;
