import React from "react";
import e1 from "../../../images/experts/expert-1.jpg";
import e2 from "../../../images/experts/expert-2.jpg";
import e3 from "../../../images/experts/expert-3.jpg";
import e4 from "../../../images/experts/expert-4.jpg";
import e5 from "../../../images/experts/expert-5.jpg";
import e6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";
const Experts = () => {
  const exp = [
    { id: 1, img: e1 },
    { id: 2, img: e2 },
    { id: 3, img: e3 },
    { id: 4, img: e4 },
    { id: 5, img: e5 },
    { id: 6, img: e6 },
  ];
  return (
    <div className="container bg-light py-2">
      <h2 className="text-info text-center my-3 p-2 bg-white">Experts</h2>
      <div className="row bg-white g-4 border my-3">
        {exp.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
