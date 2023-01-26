import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="bg-red-200 flex items-center justify-center py-5 md:font-bold space-x-2 md:space-x-8 text-[20px]">
      <NavLink to="/" className=" hover:text-red-500">
        Home
      </NavLink>

      <NavLink to="/login" className=" hover:text-red-500">
        Login
      </NavLink>
      <NavLink to="/admin" className=" hover:text-red-500">
        Admin
      </NavLink>
      <NavLink to="/addUser" className=" hover:text-red-500">
        Add Customer
      </NavLink>
      <NavLink
        to="/cart"
        className="flex justify-center items-center space-x-1 hover:text-red-500"
      >
        <FaShoppingCart /> cart ({state.length})
      </NavLink>
    </nav>
  );
};

export default Navbar;
