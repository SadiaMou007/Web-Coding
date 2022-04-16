import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  if (user) {
    navigate("/home");
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    createUserWithEmailAndPassword(email, pass);
    console.log(name, email, pass);
  };
  return (
    <div className="w-50 m-5 p-5 bg-light mx-auto">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="email" required name="email" />
        <input type="password" placeholder="password" name="pass" />
        <br />
        <input type="submit" value="register"></input>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-danger pe-auto text-decoration-none">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
