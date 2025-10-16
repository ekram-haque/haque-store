import React, { useEffect, useState } from "react";
import AppCard from "../components/AppCard";
import useApps from "../hooks/useApps";
import LoadingSkeleton from "../components/LoadingSkeleton";
import AppSearchError from "../components/AppSearchError";
import LoadingAnimation from "../components/LoadingAnimation";

const Apps = () => {
  const { apps, loading } = useApps();
  // console.log(apps)
  const [app, setApp] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchApps, setSearchApps] = useState(apps);
  const term = app.trim().toLocaleLowerCase();

  const filteredApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  // console.log(searchApps);

  useEffect(() => setSearchApps(apps), [apps]);

  useEffect(() => {
    if (term !== "") {
      setSearchLoading(true);
      const delay = setTimeout(() => {
        const filtered = apps.filter((a) =>
          a.title.toLowerCase().includes(term)
        );
        setSearchApps(filtered);
        setSearchLoading(false);
      }, 500);

      return () => clearTimeout(delay);
    } else {
      setSearchApps(apps);
    }
  }, [term, apps]);

  // console.log(apps)
  return (
    <div className="py-[80px] container mx-auto">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold ">Our All Application</h1>
            <p className="text-gray-400">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[50px]">
            <h3 className="font-bold ">({filteredApps.length}) apps found</h3>
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
              {loading ? (
                <LoadingSkeleton count={30} />
              ) : searchLoading ? (
                <LoadingAnimation />
              ) : searchApps.length === 0 ? (
                <AppSearchError />
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-[10px] lg:gap-[16px]">
                  {searchApps.map((app) => (
                    <AppCard key={app.id} app={app} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
