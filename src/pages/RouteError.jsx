import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RouteError = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-[100px] h-[680px] ">
        <img
          src="/src/assets/error-404.png"
          alt=""
          className="w-[500px] h-[500px]"
        />
        <h3>Opps , Page not found!</h3>
        <p>The page you are looking for is not available.</p>
        <div className="flex justify-center pt-[40px] pb-[80px]">
          <Link
            to={`/apps`}
            className="hover:cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-3 rounded-md text-center "
          >
            Go Back!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RouteError;
