import React from "react";
import CustomLink from "../CustomLink/MyCustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-container">
      <CustomLink to={"/home"} className={"header-link"}>
        Home
      </CustomLink>
      <CustomLink to={"/about"} className="header-link">
        About
      </CustomLink>

      <CustomLink to={"/login"} className="header-link">
        Login
      </CustomLink>
    </nav>
  );
};

export default Header;
