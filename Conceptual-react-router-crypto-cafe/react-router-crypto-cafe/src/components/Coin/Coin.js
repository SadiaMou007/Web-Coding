import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

const Coin = (props) => {
  const { symbol, name, image, id } = props.coin;
  const navigate = useNavigate();
  const detail = () => {
    const path = `/coin/${id}`;
    navigate(path);
  };
  return (
    <div className="grid grid-cols-2 border-2 p-2 bg-white">
      <div>
        <img src={image} className="h-16 w-16" />
      </div>
      <div className="flex flex-col p-2 justify-center items-center">
        <p>{name}</p>
        <p>{symbol}</p>

        <button
          className="p-2 bg-teal-600  rounded text-yellow-50  font-bold flex mx-auto justify-center items-center hover:text-yellow-500 my-3 "
          onClick={detail}
        >
          Details
          <ArrowRightIcon className="h-6 w-6 ml-2 "></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
};

export default Coin;
