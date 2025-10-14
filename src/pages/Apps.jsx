import React from "react";

const Apps = () => {
  return (
    <div className="py-[80px] container mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold ">Our All Application</h1>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[50px]">
        <h3 className="font-bold ">(99) apps found</h3>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div>
        <div className="flex justify-center font-bold mt-[100px]">
          apps will show here.
          
        </div>
      </div>
    </div>
  );
};

export default Apps;
