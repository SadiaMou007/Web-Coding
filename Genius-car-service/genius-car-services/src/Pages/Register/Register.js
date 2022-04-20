import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import PageTitle from "../Shared/PageTitle/PageTitle";
import Loading from "../Shared/Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();

  if (loading) {
    <Loading></Loading>;
  }
  if (error) {
    console.log("errorrrrrrrrr");
  }
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
    <div className="bg-container">
      <PageTitle title={"Register"}></PageTitle>

      <div className="w-50 p-4 bg-light border content">
        <h2 className="text-info">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="w-100 m-2 p-2"
          />
          <br />
          <input
            type="text"
            placeholder="email"
            required
            name="email"
            className="w-100 m-2 p-2"
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="pass"
            className="w-100 m-2 p-2"
          />
          <br />
          <input
            type="submit"
            value="register"
            className="w-100 m-2 p-2"
          ></input>
        </form>
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
