import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
      </div>
    </nav>
  );
};

export default Header;
