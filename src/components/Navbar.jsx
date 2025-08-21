import React, { useState } from "react";
import logo from "./../assets/logo.svg";
import close from "./../assets/close.svg";
import menu from "./../assets/menu.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

return (
  <nav className="p-4  flex flex-col md:flex-row md:items-center  md:justify-between ">
    <div className="flex items-center justify-between">
      <img src={logo} alt="logo" className="cursor-pointer w-10 h-10" />
      <img
        src={isOpen ? close : menu}
        alt={isOpen ? "close" : "menu"}
        className="cursor-pointer md:hidden"
        title={isOpen ? "close navigation" : "open navigation"}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>

    <ul
      className={`${
        isOpen ? "flex" : "hidden"
      } flex-col md:flex-row md:items-center justify-center py-4 my-4 md:my-0 md:py-0  space-y-4 md:space-y-0 md:gap-x-6 border-t-[1px] md:border-0 border-gray-100`}
    >
      <li className=" hover:scale-110">
        <a href="#about">About</a>
      </li>
      <li className=" hover:scale-110">
        <a href="#skills">Skills</a>
      </li>
      <li className=" hover:scale-110">
        <a href="#work">Work</a>
      </li>
      <li className=" hover:scale-110">
        <a href="#testimonials">Testimonials</a>
      </li>
      <li className="border-b-[1px] md:border-0 pb-4 md:pb-0 border-gray-100  hover:scale-110">
        <a href="#contact">Contact</a>
      </li>
      <div className="flex flex-col  md:flex-row md:items-center gap-4 md:gap-6">
        <button
          className="bg-gray-900 rounded-2xl w-full md:max-w-fit md:px-4  text-white p-2 text-center cursor-pointer"
          title="Download CV"
        >
          Download CV
        </button>
      </div>
    </ul>
  </nav>
);
}

export default Navbar;
