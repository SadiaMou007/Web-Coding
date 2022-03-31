import React from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const params = useParams();
  return <div>This is detail of {params.friendId}</div>;
};

export default FriendDetail;
