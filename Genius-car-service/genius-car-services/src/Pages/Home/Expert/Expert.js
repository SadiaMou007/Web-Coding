import React from "react";

const Expert = ({ expert }) => {
  const { img } = expert;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      <div>
        <img src={img} />
      </div>
    </div>
  );
};

export default Expert;
