import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import "../../App.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <nav className=" fixed z-40 w-full bg-[#242424]">
      <Toaster />
      <div className=" container mx-auto  ">
        {/* for navbar big screen */}
        <div className=" flex-wrap md:flex hidden  justify-between  text-myText leading-5">
          <Link
            smooth={true}
            duration={400}
            spy={true}
            className="leading-10"
            to={"hero"}
          >
            Milan
          </Link>
          <div className=" menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex cursor-pointer p-4 md:p-0 sm:flex-row md:space-x-8 ">
              <li className=" cursor-pointer">
                <Link
                  spy={true}
                  to={"about"}
                  smooth={true}
                  duration={400}
                  offset={20}
                  className=" leading-10 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li className=" cursor-pointer">
                <Link
                  spy={true}
                  to={"projects"}
                  smooth={true}
                  duration={400}
                  className="leading-10 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li className=" cursor-pointer">
                <Link
                  spy={true}
                  smooth={true}
                  duration={400}
                  to={"contact"}
                  className="leading-10 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* for mobile menu */}
        <div className=" flex justify-between items-center py-1    md:hidden">
          <Link
            smooth={true}
            duration={400}
            spy={true}
            className="leading-10"
            to={"hero"}
          >
            Milan
          </Link>
          {openNavbar === false ? (
            <button
              onClick={() => setOpenNavbar(true)}
              className=" text-slate-200 flex items-center border border-slate-200 rounded-md px-3 py-2 hover:text-white hover:border-white"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setOpenNavbar(false)}
              className=" text-slate-200 flex items-center border border-slate-200 rounded-md px-3 py-2 hover:text-white hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        {/* mobile navbar view */}
        {openNavbar === true ? (
          <>
            <div
              className=" bg-[#242424] menu block md:hidden md:w-auto"
              id="navbar"
            >
              <ul
                onClick={() => setOpenNavbar(false)}
                className="flex flex-col  cursor-pointer p-4 md:p-0 sm:flex-row md:space-x-8 "
              >
                <li className=" cursor-pointer hover:text-purple-700">
                  <Link
                    onClick={() => setOpenNavbar(false)}
                    spy={true}
                    to={"about"}
                    smooth={true}
                    duration={400}
                    offset={20}
                    className=" leading-10 cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li className=" cursor-pointer hover:text-purple-700">
                  <Link
                    onClick={() => setOpenNavbar(false)}
                    spy={true}
                    to={"projects"}
                    smooth={true}
                    duration={400}
                    className="leading-10 cursor-pointer"
                  >
                    Projects
                  </Link>
                </li>
                <li className=" cursor-pointer hover:text-purple-700">
                  <Link
                    onClick={() => setOpenNavbar(false)}
                    spy={true}
                    smooth={true}
                    duration={400}
                    to={"contact"}
                    className="leading-10 cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
