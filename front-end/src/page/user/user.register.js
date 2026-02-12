
import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserRegister = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "400px" }} className="shadow p-4">
        <h3 className="text-center mb-4">User Register</h3>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Button variant="primary" className="w-100">
            Login
          </Button>
        </Form>

        <div className="text-center mt-3">
          Not registered?{" "}
          <Link to="/User/User-Login" className="fw-bold">
            Login
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default UserRegister;