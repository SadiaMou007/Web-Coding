import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../FireBase/Firebase.init";
import "./Header.css";
const Header = () => {
  // 5
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  //6
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="nav">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to={"/home"}
      >
        Home
      </NavLink>

      {user?.uid ? (
        <div className="userIfo">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
          <img src={user?.photoURL} alt="" className="userImg" />
        </div>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to={"/login"}
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Header;
