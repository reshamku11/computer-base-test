
import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import en from "../../locales/en.json";
import hi from "../../locales/hi.json";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const language = useSelector((state) => state.language.language);
  const t = language === "en" ? en : hi;
  const navigate = useNavigate();
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "400px" }} className="shadow p-4">
        <h3 className="text-center mb-4">User Register</h3>

        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="enter your roll number" />
          </Form.Group>


          <Button variant="primary" className="w-100" onClick={() => navigate("/user/InstructionsPage")}>
            {t.login}
          </Button>

          <div className="text-center mt-3">
            {t.register}
          </div>
        </Form>
      </Card>

    </Container>
  );
};

export default UserLogin;
