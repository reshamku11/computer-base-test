import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timer from "./timer.js";
import QuestionCard from "./questionCard.js";
import QuestionNavigation from "./questionNavigation.js";
import QuestionPalette from "./questionPalette.js";
import LanguageSwitcher from "../../component/languageSwitcher";

const ExamLayout = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column">

      {/* Header */}
      <Row className="bg-dark text-white p-3">
        <Col md={3}>
          <h5>CBT Exam Portal</h5>
        </Col>
        <Col md={3}>
          <LanguageSwitcher padding={0} />
        </Col>
        <Col md={4} className="text-end">
          <Timer duration={600} onTimeUp={() => alert("Time Up")} />
        </Col>
      </Row>

      {/* Main Body */}
      <Row className="flex-grow-1">

        {/* Question Area */}
        <Col md={8} className="p-4 border-end">
          <QuestionCard />
        </Col>

        {/* Palette Area */}
        <Col md={4} className="p-4 bg-light">
          <QuestionPalette />
        </Col>

      </Row>

      {/* Footer Navigation */}
      <Row className="bg-secondary p-3">
        <Col>
          <QuestionNavigation />
        </Col>
      </Row>

    </Container>
  );
};

export default ExamLayout;
