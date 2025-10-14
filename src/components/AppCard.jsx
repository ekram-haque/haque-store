import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
    const {title,image,ratingAvg,downloads} = app;


    const downloadFormat = (num) =>{
        if(num >=1000000){
            return (num / 1000000).toFixed(1)+" M" 
        }
         if( num >= 1000){
            return (num / 1000).toFixed(1) +" K"
         }
         else{
            return num.toString();
         }
    }
  return (
    <div>
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
            <div className="flex items-center gap-1 bg-[#F1F5E8] text-[#00D390] px-[6px] py-[3px] md:px-[12px] md:py-[6px] rounded-md">
              <img
                className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] rounded-lg"
                src="/src/assets/icon-downloads.png"
                alt=""
              />
              <p>{downloadFormat(downloads)}</p>
            </div>
            <div className="flex items-center gap-1 bg-[#FFF0E1] text-[#FF8811] px-[6px] py-[3px] md:px-[12px] md:py-[6px] rounded-md">
              <img
                className="w-[12px] h-[12px] md:w-[16px] md:h-[16px]"
                src="/src/assets/icon-ratings.png"
                alt=""
              />
              <p>{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AppCard;
