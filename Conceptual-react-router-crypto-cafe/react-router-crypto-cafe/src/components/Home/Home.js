import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className=" text-center pt-48  ">
        <h1 className="text-3xl text-yellow-500 font-mono mb-4 p-2">
          Welcome To Crypto Cafe
        </h1>
        <button className="px-3 bg-teal-600 py-2 rounded text-yellow-50 font-semi-bold text-xl flex mx-auto justify-center items-center hover:text-yellow-500">
          Explore Coins{" "}
          <ArrowRightIcon className="h-6 w-6 ml-2 "></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
};

export default Home;
