import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white text-teal-700 p-3 rounded-lg">
      <h2 className="text-xl m-2 p-2 bg-blue-600 font-bold text-white">
        {name}
      </h2>
      <p className="font-semi-bold">
        <span className="text-5xl">${price}</span>
        <span className="text-xl">/mo</span>
      </p>
      <div>
        <h2 className="text-xl text-left my-2">Benefits:</h2>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="flex w-full bg-blue-300 p-2 mt-2 justify-center items-center text-xl text-white rounded bottom-0 hover:bg-green-500 font-bold ">
        Buy Now
        <ArrowRightIcon className="h-6 w-6 ml-2 hover:text-green-500"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
