import React from "react";
import useServices from "../../Hooks/useServices";

const ManageService = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("AreYou sure want to delete this service?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="w-25 mx-auto border my-5 bg-warning">
      <h6 className="mb-4 text-center p-2">
        Available Services: {services.length}
      </h6>
      {services.map((service) => (
        <div className="m-2 p-2 border">
          <span className="">{service.name}</span>
          <button
            className="border-0 px-3 py-2 ms-2 bg-danger"
            onClick={() => handleDelete(service._id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
