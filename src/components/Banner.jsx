import React from "react";

const Banner = ({ apps }) => {
  const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);

  const totalReview = apps.reduce((sum, app) => sum + app.reviews, 0);

  const numberFormat = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + " B";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + " M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + " K";
    } else {
      return num.toString();
    }
  };

  return (
    <div>
      {/* hero section  */}
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-[-16px] md:p-[80px] pt-[20px] flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl text-white font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex mt-[40px] flex-col md:flex-row text-white ">
          <div className="stat text-white">
            <div className="stat-title text-white">Total Downloads</div>
            <div className="stat-value">{numberFormat(totalDownloads)}</div>
            <div className="stat-desc text-white">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-title text-white"> Total Reviews</div>
            <div className="stat-value">{numberFormat(totalReview)}</div>
            <div className="stat-desc text-white">46% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-title text-white">Active Apps</div>
            <div className="stat-value font-bold">{apps.length}+</div>
            <div className="stat-desc text-white">31 more will Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
