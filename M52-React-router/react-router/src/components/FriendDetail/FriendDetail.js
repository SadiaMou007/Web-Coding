import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div className="text-2xl p-2 m-2 text-center">
      {detail.id}
      <h3> Name: {detail.name}</h3>
      <h5>Email: {detail.email}</h5>
      <h5>
        Address: City- {detail.address?.city} Street- {detail.address?.street}
      </h5>
    </div>
  );
};

export default FriendDetail;
