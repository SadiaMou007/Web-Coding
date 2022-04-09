import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

// 3
import { auth } from "../../FireBase/Firebase.init";

// 1
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import toast from "react-hot-toast";
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const navigate = useNavigate();
  //e1
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [cpassword, setCpassword] = useState({ value: "", error: "" });

  // 4
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  //g1
  const handleSignup = (e) => {
    e.preventDefault();

    if (email.value === "") {
      setEmail({ value: "", error: "required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "required" });
    }

    if (email.value && password.value && password.value === cpassword.value) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("signed up");
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorMessage.includes("already-in-use")) {
            toast.error("user already exits", { id: "error" });
          } else {
            toast.error(errorMessage, { id: "err" });
          }
        });
    }
  };

  //e2
  const handleEmail = (e) => {
    if (/\S+@\S+\.\S+/.test(e)) {
      setEmail({ value: e, error: "" });
    } else {
      setEmail({ value: "", error: "Invalid email" });
    }
  };
  const handlePassword = (e) => {
    if (e.length > 5) {
      setPassword({ value: e, error: "" });
    } else {
      setPassword({ value: "", error: "Password too short" });
    }
  };
  const handleCpassword = (e) => {
    if (e === password.value) {
      setCpassword({ value: e, error: "" });
    } else {
      setCpassword({ value: "", error: "Password mismatch" });
    }
  };

  return (
    <div className="c">
      <div className="login-c">
        <h3>Sign Up</h3>
        <form onSubmit={handleSignup}>
          <div className="input-section">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                onBlur={(e) => handleEmail(e.target.value)}
              />
            </div>
            {email?.error && <p className="error">{email.error}</p>}
          </div>
          <div className="input-section">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                id="password"
                onBlur={(e) => handlePassword(e.target.value)}
              />
            </div>
            {password?.error && <p className="error">{password.error}</p>}
          </div>
          <div className="input-section">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                onBlur={(e) => handleCpassword(e.target.value)}
              />
            </div>
            {cpassword?.error && <p className="error">{cpassword.error}</p>}
          </div>
          <div>
            <button type="submit" className="g-btn s-color">
              Sign Up
            </button>
          </div>

          <Link to={"/login"}>
            <p>Already have an account? Login</p>
          </Link>
          <p className="or">Or</p>
          <button onClick={googleAuth} className="g-btn g-color">
            Continue with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
