import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./App.css";
import { useState } from "react";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
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
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  return (
    <div className="App">
      <h2 className="m-3 text-center">Email pass auth(sign up)</h2>
      <div className="w-50 mx-auto p-4 bg-light rounded">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
            />
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
            />
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
