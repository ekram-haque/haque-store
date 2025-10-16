import React from "react";

const LoadingSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-[10px] lg:gap-[16px] container mx-auto">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-64 p-4 rounded-2xl shadow-md bg-white">
          <div className="w-full h-40 bg-gray-200 rounded-xl animate-pulse mb-4" />
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-3" />
          <div className="flex justify-between gap-3">
            <div className="h-8 w-20 bg-gray-200 rounded-md animate-pulse" />
            <div className="h-8 w-12 bg-gray-200 rounded-md animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
