import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (proceed) {
      const url = `http://localhost:5000/user/${id}`;
      console.log(id);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      Home Users data: {users.length}
      {users.map((user) => (
        <div key="user._id">
          {" "}
          {user.name} email: {user.email}
          <Link to={`/update/${user._id}`}>Update</Link>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
