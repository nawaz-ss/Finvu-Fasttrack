import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const submitRegister = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;
    const data = { email, username, password };
    console.log("data=>", data);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Form onSubmit={submitRegister}>
        <h2>Register Form</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            ref={emailRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            required
            ref={usernameRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
