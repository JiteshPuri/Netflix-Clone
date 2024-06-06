import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaCaretLeft } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Dropdown from "./Dropdown";
import Drop2 from "./Drop2";
import Drop3 from "./Drop3";

const Burger = () => {
  const [burger, setBurger] = useState(false);
  const handleClick = () => {
    setBurger(!burger);
  };
  return (
    <div className="h-full z-20 fixed ">
      <div className=" fixed   bg-black text-white ">
        <GiHamburgerMenu
          className="mt-6 cursor-pointer  text-red-600 text-3xl ml-4"
          onClick={handleClick}
        />
      </div>
      <div
        className={`fixed bg-[#181a26] border-gray-800 border-r-2 w-80 h-screen ${
          burger
            ? "  left-0  duration-[700ms]"
            : "left-[-100%] duration-[700ms] "
        }`}
      >
        {/* onMouseOut={burger ? handleClick : null} */}
        {/* <FaCaretLeft className='text-4xl text-red-600 '/> */}
        <IoCloseSharp
          className={` fixed text-4xl mt-6 cursor-pointer  duration-[700ms] text-gray-600  ${
            burger ? "left-[280px] " : "left-[-100%] "
          } `}
          onClick={handleClick}
        />
        <h1 className=" flex text-red-600 text-4xl mt-5 ml-[60px] cursor-pointer ">
          NETFLIX
        </h1>
        <ul className="text-white min-w-full mt-5">
          <li>
            <Dropdown />
          </li>
          <li className="mt-1">
            <Drop2 />
          </li>
          <li className="mt-1">
            <Drop3 />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Burger;
