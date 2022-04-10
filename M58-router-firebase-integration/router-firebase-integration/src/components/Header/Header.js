import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  console.log(user);
  return (
    <div>
      <div className="border-2 p-4 text-xl font-mono flex justify-between">
        <div className="hidden md:block">NavBrand</div>
        <div className="flex">
          <div className="mx-3">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : "text-cyan-700"
              }
              to={"/home"}
            >
              Home
            </NavLink>
          </div>
          <div className="mx-3">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : "text-cyan-700"
              }
              to={"/products"}
            >
              Products
            </NavLink>
          </div>
          <div className="mx-3">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : "text-cyan-700"
              }
              to={"/reviews"}
            >
              Reviews
            </NavLink>
          </div>
          <div className="mx-3">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-cyan-500" : "text-cyan-700"
              }
              to={"/register"}
            >
              Register
            </NavLink>
          </div>
          <div className="mx-3">
            {user?.uid ? (
              <button onClick={handleSignOut}>Logout</button>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-cyan-500" : "text-cyan-700"
                }
                to={"/login"}
              >
                Login
              </NavLink>
            )}
            <span className="text-sm mx-2">
              {user?.displayName && user.displayName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
