import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../FireBase/Firebase.init";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  //g2
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        toast.success("Login successful", { id: "sss" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Invalid user or password", { id: "uuu" });
      });
  };

  return (
    <div className="c">
      <div className="login-c">
        <h3>Login</h3>

        <form onSubmit={handleLogin}>
          <div className="input-section">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <div className="input-section">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input type="password" name="password" id="password" />
            </div>
          </div>
          <div className="input-section">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="g-btn s-color">
              Log In
            </button>
          </div>
          <button onClick={googleAuth} className="g-btn g-color">
            Continue with google
          </button>
          <Link to={"/signup"} className="slink">
            <p>Create new account</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
