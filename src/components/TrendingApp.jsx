import React from "react";
import { Link } from "react-router";

const TrendingApp = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-[80px] w-11/12 mx-auto">
        <h1 className="text-3xl font-bold ">Trending Apps</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex flex-col mt-[100px]">
          apps will show here.
          <Link to={`/apps`}  className="hover:cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-md text-center ">
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApp;
