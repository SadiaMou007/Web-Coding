import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { _id, name, img, price, description } = service;
  const handleDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} alt="" className="w-100" />
      <h4>{name}</h4>
      <h5>Price: ${price}</h5>
      <p>{description}</p>
      <button onClick={() => handleDetail(_id)}>Book {name}</button>
    </div>
  );
};

export default Service;
