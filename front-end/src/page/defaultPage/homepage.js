import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const HomePage = async () => {
    return (<>
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Welcome to user</Card.Title>
                            <Card.Text>
                                Test practice for CBT.
                            </Card.Text>
                            <Link to={'/User/User-Register'}><Button variant="primary">Click Me For Register</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Welcome to user</Card.Title>
                            <Card.Text>
                                Test practice for CBT.
                            </Card.Text>
                            <Link to={'/User/User-Login'}><Button variant="primary">Click Me For Login</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Welcome to admin</Card.Title>
                            <Card.Text>
                                Test practice for CBT.
                            </Card.Text>
                            <Link to={'/Admin/Admin-Login'}><Button variant="primary">Click Me For Login</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>)
}

export default HomePage;