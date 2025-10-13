import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="  bg-[#001931] text-white flex  md:flex-col md:items-center justify-center   ">

      <div className="w-11/12 mx-auto md:px-[80px] py-[35px]  ">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-[10px] md:h-[54px]">
          <div className="flex gap-1 items-center ">
            <img
              src="/src/assets/logo.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <h1 className="md:text-xl text-sm font-bold text-white">
              Haque Store
            </h1>
          </div>
          <div className="flex flex-col md:items-center justify-center gap-3">
            <p>social Links</p>
            <div className="flex gap-[10px]">
                <Facebook/>
                <Github/>
                <Linkedin/>
                <Twitter/>
            </div>
          </div>
        </div>

        <p className="flex md:justify-center md:items-center mt-[20px]  md:h-[54px]">Copyright © 2025 - All right reserved by Haque Store</p>
      </div>
    </div>
  );
};

export default Footer;
