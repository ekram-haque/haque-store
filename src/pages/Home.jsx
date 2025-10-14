import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import TrendingApp from "../components/TrendingApp";
import { Link, useLoaderData } from "react-router";
import { HiH3 } from "react-icons/hi2";
import AppCard from "../components/AppCard";

const Home = () => {
  const apps = useLoaderData();
  console.log(apps)

  const trendingApps = apps.slice(0, 10);

  return (
    <div>
      <Hero />
      <Banner apps={apps} />
      <TrendingApp />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-[10px] lg:gap-[16px] container mx-auto">
        {trendingApps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="flex justify-center pt-[40px] pb-[80px]">
        <Link
          to={`/apps`}
          className="hover:cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-md text-center "
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
