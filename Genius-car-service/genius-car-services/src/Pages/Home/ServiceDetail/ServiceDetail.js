import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="container bg-light p-3">
      <div className="mt-5">
        <h3>Service Name: {service.name}</h3>
      </div>
      <button className="rounded bg-info border-0 p-2 my-4 ">
        <Link to="/checkout" className="text-decoration-none text-white ">
          Checkout
        </Link>
      </button>
    </div>
  );
};

export default ServiceDetail;
