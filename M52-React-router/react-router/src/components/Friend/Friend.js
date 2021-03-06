import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { id, name, username } = props.info;
  const navigate = useNavigate();
  const showInfo = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };

  return (
    <div className="bg-green-50 border-2 rounded">
      <h3 className="text-xl p-2 font-semibold my-2">{name}</h3>
      <p className="text-xl mb-2 p-2">Id: {id}</p>
      <Link to={"/friend/" + id}>Show Details</Link>
      <button
        className="w-full bg-red-500 p-2 text-xl font-mono font-bold text-white border-4 rounded hover:bg-red-700"
        onClick={showInfo}
      >
        {username} Id: {id}
      </button>
    </div>
  );
};

export default Friend;
