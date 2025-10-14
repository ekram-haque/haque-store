import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="hero mt-[80px] ">
        <div className="hero-content text-center">
          <div className="max-w-md  ">
            <h1 className="text-5xl font-bold">
              We Build <br />
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="py-6 text-lg text-center">
              At Haque Store, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex items-center justify-center gap-[10px]">
              <button className="btn ">
                <img src="/src/assets/play-store.png" alt="" />
                Play Store
              </button>
              <button className="btn ">
                <img src="/src/assets/app-store.png" alt="" />
                App Store
              </button>
            </div>
            <img src="/src/assets/hero.png" className="mt-[40px] " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
