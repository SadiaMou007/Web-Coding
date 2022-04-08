import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./App.css";
import { useState } from "react";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmailBlur = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handlePasswordBlur = (e) => {
    const pass = e.target.value;
    setPass(pass);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
        pass
      )
    ) {
      e.stopPropagation();
      setError(
        "Password requires at least 1 uppercase, 1 lowercase, 1 number and 1 special character"
      );
      return;
    }

    setValidated(true);
    setError("");

    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        setEmail("");
        setPass("");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h2 className="m-3 text-center">Email pass auth(sign up)</h2>

      <div className="w-50 mx-auto p-4 bg-light rounded">
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>

            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              required
            />
            <p className="text-danger">{error}</p>

            <Form.Control.Feedback type="invalid">
              Please choose a password
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
