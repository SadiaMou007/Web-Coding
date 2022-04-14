import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-light p-4 my-4">
      <div className="bg-white">
        <h2 className="text-info text-center mb-3 p-2">Our Services</h2>
      </div>
      <div className="services-container">
        {services.map((service) => (
          <Service key={Service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};
export default Services;
