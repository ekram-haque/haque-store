import React, { useState } from "react";
import AppCard from "../components/AppCard";
import useApps from "../hooks/useApps";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [app, setApp] = useState("");
  const term = app.trim().toLocaleLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  // console.log(searchApps);

  // console.log(apps)
  return (
    <div className="py-[80px] container mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold ">Our All Application</h1>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[50px]">
        <h3 className="font-bold ">({searchApps.length}) apps found</h3>
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

          <input
            onChange={(e) => setApp(e.target.value)}
            value={app}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div>
        <div className="flex justify-center font-bold mt-[100px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-[10px] lg:gap-[16px] container mx-auto">
            {searchApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
