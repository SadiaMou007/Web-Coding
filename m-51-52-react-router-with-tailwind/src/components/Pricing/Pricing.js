import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benefits: ["Long lasting", "Awesome features", "Latest inclusion"],
    },
    {
      id: 2,
      name: "Regular",
      price: 99,
      benefits: [
        "Awesome features",
        "Long lasting",

        "Latest inclusion",
        "Free trial benefit",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 199,
      benefits: [
        "Free trial benefit",
        "Awesome features",
        "Long lasting",
        "Latest inclusion",
      ],
    },
  ];
  return (
    <div className=" p-2 mt-3 bg-gray-300 ">
      <h1 className="text-3xl font-mono  text-teal-700 p-2 font-bold">
        Best Deals of the town
      </h1>
      <p className="text-teal-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        debitis porro repellendus eligendi fugit maxime veniam quam quisquam
        sapiente pariatur.
      </p>
      <div className="my-4 grid md:grid-cols-3 gap-5">
        {pricingOptions.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
