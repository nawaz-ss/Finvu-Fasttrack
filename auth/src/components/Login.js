import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const data = { email, password };
    console.log("data=>", data);
  };

  useEffect(()=>{
    
  },[])

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Form onSubmit={submitLogin}>
        <h2>Login Form</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            ref={emailRef}
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
        <Form.Group>
          <Form.Text className="text-muted">
            {/* Click <Link to="/register">here</Link> to register */}
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Login;
