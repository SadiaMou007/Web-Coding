import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-red-900 w-full p-3">
      <div className=" text-3xl text-center text-yellow-100 p-2">HaWoFoMe</div>
      <div className="flex items-center justify-center text-xl font-mono text-white">
        <CustomLink to={"/"} className="m-4">
          Home
        </CustomLink>

        <CustomLink to={"/friends"} className="m-4">
          Friends
        </CustomLink>
        <CustomLink to={"/posts"}>Posts</CustomLink>
        <CustomLink to={"/about"} className="m-4">
          About
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
