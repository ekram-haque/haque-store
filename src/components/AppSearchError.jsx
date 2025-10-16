import React from "react";
import { Link } from "react-router";

const AppSearchError = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[30px] h-[680px] ">
        <img
          src="/src/assets/App-Error.png"
          alt=""
          className="w-[500px] h-[500px]"
        />
        <h3>Oh No !! App not found!</h3>
        <p>
          The App you are requesting is not found on our system. please try
          another apps.
        </p>
        <div className="flex justify-center pt-[40px] pb-[80px]">
          <Link
            to={`/home`}
            className="hover:cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-md text-center "
          >
           Brows Apps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppSearchError;
