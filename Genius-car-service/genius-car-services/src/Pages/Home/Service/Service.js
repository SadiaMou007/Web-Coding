import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h5>Price: ${price}</h5>
      <p>{description}</p>
      <button>Book {name}</button>
    </div>
  );
};

export default Service;
