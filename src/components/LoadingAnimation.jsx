import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingAnimation = () => {
  const [showText, setShowText] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true));

    const zoomTimer = setTimeout(() => setZoomOut(true), 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(zoomTimer);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-center mt-[50px]  transition-transform duration-700 ${
        zoomOut ? "scale-0 opacity-0" : "scale-100 opacity-100"
      }`}
    >
      <div className="text-5xl font-bold text-gray-400 mr-2 animate-fade-in">
        L
      </div>

      <img src="/logo.png" alt="logo" className="w-16 h-16 animate-spin" />

      {showText && (
        <p className="text-5xl font-bold text-gray-400 ml-2 animate-fade-in">
          O A D I N G
        </p>
      )}
    </div>
  );
};

export default LoadingAnimation;
