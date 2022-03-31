import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  console.log(friends);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 p-2 gap-5">
      {friends.map((friend) => (
        <Friend key={friend.id} info={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
