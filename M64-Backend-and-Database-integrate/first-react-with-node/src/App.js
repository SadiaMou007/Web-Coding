import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const user = { name, email };

    //fetch post data
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        console.log(data);
      });
  };

  return (
    <div className="App">
      <h2>Work with nodejs data </h2>
      <form onSubmit={handleLogin}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="submit" value="Submit" />
      </form>
      <h3>data: {users.length}</h3>
      {users.map((user) => (
        <div key={user.id}>
          id:{user.id} User Name: {user.name} Email:{user.email}
        </div>
      ))}
    </div>
  );
}

export default App;
