import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const user = { name, email };
    const url = `http://localhost:5000/user/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("user added successfully");
        e.target.reset();
      });
  };

  return (
    <div>
      <h2>Updating USer id: {id}</h2>
      <h3>user: {user.name}</h3>
      <form onSubmit={handleUpdateUser}>
        <div>
          <label htmlFor="name">Name </label>
          <input type="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" name="email" />
        </div>
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
