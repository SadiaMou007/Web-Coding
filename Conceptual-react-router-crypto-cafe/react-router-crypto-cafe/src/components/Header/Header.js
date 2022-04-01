import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="sticky top-0 flex text-2xl font-bold items-center justify-between bg-gray-50 p-3">
      <div className="ml-4 hidden md:block">
        <Link to={"/"}>Crypto Cafe</Link>
      </div>
      <div className="flex gap-5 mr-4">
        <CustomLink to={"/"}>Home</CustomLink>
        <CustomLink to={"/coins"}>Coins</CustomLink>
        <CustomLink to={"/about"}>About</CustomLink>
        <CustomLink to={"/contact"}>Contact</CustomLink>
      </div>
    </div>
  );
};

export default Header;
