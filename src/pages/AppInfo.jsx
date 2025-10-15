import React, { useState } from "react";
import { Form, useParams } from "react-router";
import useApps from "../hooks/useApps";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const AppInfo = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  //   console.log(apps);
  if (loading) return <p>loading....</p>;

  const app = apps.find((a) => String(a.id) === id);
  //   console.log(app);

  const {
    image,
    title,
    downloads,
    ratingAvg,
    companyName,
    reviews,
    size,
    description,
    ratings
  } = app;

  const Format = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + " B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + " M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + " K";
    } else {
      return num.toString();
    }
  };

  const handleInstallation = () => {
    const installed = JSON.parse(localStorage.getItem("installed"));

    let newInstalled = [];

    if (installed) {
      const isExist = installed.find((a) => a.id === app.id);
      if (isExist) {
        alert("already have");

        return;
      }
      newInstalled = [...installed, app];
    } else {
      newInstalled.push(app);
    }

    localStorage.setItem("installed", JSON.stringify(newInstalled));

    console.log(newInstalled);
  };

  return (
    <div className="w-11/12 mx-auto ">
      <div className=" bg-white my-6 p-6 rounded-2xl shadow-md border border-gray-200">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* App Image */}
          <img
            className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-contain rounded-lg"
            src={image}
            alt="app"
          />

          {/* App Details */}
          <div className="flex-1">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
              <p className="text-sm text-gray-500">
                Developed by{" "}
                <span className="text-blue-600 font-medium">{companyName}</span>
              </p>
            </div>

            <hr className="my-4 border-gray-200" />

            {/* Stats Section */}
            <div className="flex flex-wrap gap-10">
              <div className="flex flex-col items-center md:items-start w-[150px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon-downloads.png"
                  alt="downloads"
                />
                <p className="text-gray-500 text-sm mt-1">Downloads</p>
                <p className="font-bold text-lg text-gray-800 mt-1">
                  {Format(downloads)}
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start w-[150px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon-ratings.png"
                  alt="ratings"
                />
                <p className="text-gray-500 text-sm mt-1">Average Rating</p>
                <p className="font-bold text-lg text-gray-800 mt-1">
                  {ratingAvg}
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start w-[150px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/icon-review.png"
                  alt="reviews"
                />
                <p className="text-gray-500 text-sm mt-1">Total Reviews</p>
                <p className="font-bold text-lg text-gray-800 mt-1">
                  {Format(reviews)}
                </p>
              </div>
            </div>

            {/* Install Button */}
            <div className="mt-6">
              <button
                onClick={handleInstallation}
                className={`px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md`}
              >
                Install Now ({size} MB)
              </button>
            </div>
          </div>
        </div>
      </div>

<div className="w-11/12 mx-auto my-[50px] h-80">
    <h3 className="font-bold">Ratings</h3>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      layout="vertical"
      data={ratings}
      margin={{ top: 20, right: 30,  bottom: 20 }}
    >
      <XAxis type="number" tickFormatter={(value) => Format(value)} />
      <YAxis type="category" dataKey="name" reversed  />
      <Tooltip />
      <Bar
        dataKey="count"
        fill="#FF8800"
        barSize={25}
        radius={[5, 5, 5, 5]}
        label={{ position: "right", formatter: (val) => Format(val) }}
      />
    </BarChart>
  </ResponsiveContainer>
</div>

      <hr className="my-4 border-gray-200" />
      <div className=" my-[50px] ">
        <h2 className="font-bold mb-[25px]">description</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default AppInfo;
