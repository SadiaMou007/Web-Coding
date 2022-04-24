import React from "react";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const user = { name, email };

    fetch(`http://localhost:5000/user`, {
      method: "POST",
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
      <h3>Add New User:</h3>
      <form onSubmit={handleAddUser}>
        <div>
          <label htmlFor="name">Name </label>
          <input type="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" name="email" />
        </div>
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
