import React from "react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { BsFillChatTextFill } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
const NavAdmin = () => {
  return (
    <nav className="w-[20%] h-screen bg-[#212121] flex flex-col items-start justify-start font-Lora md:text-[20px] space-y-[50px] pl-5 pt-20">
      <NavLink
        to="/"
        className="bg-[#ffc171] flex items-center rounded-md hover:text-gray-800 px-1"
      >
        <MdSpaceDashboard />
        Dashboard
      </NavLink>

      <NavLink
        to="/"
        className="hover:bg-[#ffc171] flex items-center rounded-md text-white hover:text-gray-800 px-1"
      >
        <RiDashboard2Fill />
        Customers
      </NavLink>
      <NavLink
        to="/"
        className="hover:bg-[#ffc171] flex items-center rounded-md text-white hover:text-gray-800 px-1"
      >
        <MdOutlineProductionQuantityLimits />
        Products
      </NavLink>
      <NavLink
        to="/addUser"
        className="hover:bg-[#ffc171] flex items-center rounded-md text-white hover:text-gray-800 px-1"
      >
        <MdPersonAdd />
        Add User
      </NavLink>
      <NavLink
        to="/addUser"
        className="hover:bg-[#ffc171] flex items-center rounded-md text-white hover:text-gray-800 px-1"
      >
        <BsFillChatTextFill />
        FAQ
      </NavLink>
    </nav>
  );
};

export default NavAdmin;
