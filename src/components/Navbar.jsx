import { EllipsisVertical, Github } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";

const handleGithubRedirect = () => {
  window.open("https://github.com/ekram-haque", "_blank");
};

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="w-11/12 mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden py-[5px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={`/home`}>Home</NavLink>
              </li>
              <li>
                <NavLink to={`/apps`}>Apps</NavLink>
              </li>
              <li>
                <NavLink to={`/installation`}>Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="/src/assets/logo.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
            <Link
              to={`/home`}
              className="md:text-xl text-sm font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "
            >
              Haque Store
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={`/home`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/apps`}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={`/installation`}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end hover:cursor-pointer">
          <div className="flex gap-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  px-4 py-3 rounded-lg ">
            <Github />
            <button onClick={handleGithubRedirect} className="hover:cursor-pointer">Contribute</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
