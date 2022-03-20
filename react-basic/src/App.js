import { useEffect, useState } from "react";
import "./App.css";
const number = 5555;

function App() {
  const arr = [
    { Name: "aa", salary: "100k" },
    { Name: "bb", salary: "105k" },
    { Name: "cc", salary: 10000 },
    { Name: "dd", salary: 150000 },
  ];

  return (
    <div className="App">
      {/* /////////1//////////// */}
      <div className="container">
        <h2>Dynamic value: {number}</h2>
      </div>

      <div className="container2">
        {/* ///////2///////// */}
        <Person Name="sadia"></Person>
        {/* /////////3//////// */}
        {arr.map((a) => (
          <Person Name={a.Name} salary={a.salary}></Person>
        ))}
      </div>

      {/* /////use State///// */}
      <div className="container3">
        <h2>Use State </h2>
        <Counter></Counter>
      </div>

      {/* /////use Effect///// */}
      <div className="container4">
        <h2>Use Effect </h2>
        <Users></Users>
      </div>
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h2>Person component</h2>
      <h4>Name: {props.Name}</h4>
      <h4>Salary: {props.salary}</h4>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => (count > 0 ? setCount(count - 1) : setCount(0));

  return (
    <div>
      <h3>Counter:{count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="users">
      {users.map((user) => (
        <UserInfo Name={user.name} email={user.email}></UserInfo>
      ))}
    </div>
  );
}
function UserInfo(props) {
  console.log(props);
  return (
    <div>
      <div className="singleUser">
        <h3>Name: {props.Name}</h3>
        <h4>Email: {props.email}</h4>
      </div>
    </div>
  );
}
export default App;
