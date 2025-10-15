import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { title, image, ratingAvg, downloads, id } = app;

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
  return (
    <Link to={`/AppInfo/${id}`}>
      <div className="card bg-base-100 w-[200px] h-[270px] lg:w-[317px] lg:h-[404px] px-[5px] shadow-sm rounded-lg ">
        <figure>
          <img
            className="lg:w-[285px] lg:h-[285px] w-[155px] h-[155px] bg-gray-400 bg-center rounded-lg mt-[10px] md:mt-[16px] hover:scale-105 transition ease-in-out"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions  flex justify-between items-center">
            <div className="flex items-center gap-1 font-bold bg-[#F1F5E8] text-[#00D390] px-[3px] py-[2px] md:px-[12px] md:py-[6px] rounded-md">
              <Download size={12} /> {Format(downloads)}
              
            </div>
            <div className="flex items-center gap-1 font-bold bg-[#FFF0E1] text-[#FF8811] px-[3px] py-[2px] md:px-[12px] md:py-[6px] rounded-md">
              <Star size={12} /> {ratingAvg}
              
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
