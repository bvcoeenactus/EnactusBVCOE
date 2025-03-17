
import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between md:h-[12vh] px-6 py-4 border-b bg-black border-b-gray-400">
      {/* Logo */}
      <div>
        <img
          className="w-24 md:w-[8vw]"
          src={assets.LogoEnactus}
          alt="Enactus Logo"
        />
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white items-center gap-10 font-semibold">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white py-1 no-underline nav"
        >
          HOME
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white py-1 no-underline nav"
        >
          ABOUT US
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white py-1 no-underline nav"
        >
          OUR PROJECTS
        </Link>
        <Link
          to="events"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white py-1 no-underline nav"
        >
          OUR EVENTS
        </Link>
        <Link
          to="team"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white py-1 no-underline nav"
        >
          OUR TEAM
        </Link>
      </ul>
      {/* Mobile Menu Icon */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img className="w-8" src={assets.menuicon} alt="Menu" />
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-gray-900 z-20 transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg md:hidden`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <img className="w-20" src={assets.LogoEnactus} alt="Enactus Logo" />
          <img
            className="w-7 cursor-pointer"
            onClick={() => setShowMenu(false)}
            src={assets.closeicon}
            alt="Close"
          />
        </div>

        <ul className=" flex flex-col items-center text-white gap-10 mt-5 px-5 text-lg font-medium no-underline">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white no-underline nav"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white no-underline nav"
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white no-underline nav"
            >
              OUR PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="events"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white no-underline nav"
            >
              OUR EVENTS
            </Link>
          </li>
          <li>
            <Link
              to="team"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white no-underline nav"
            >
              OUR TEAM
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
