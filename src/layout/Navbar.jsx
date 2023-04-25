import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Etikit Cinema
          </Link>

          <Container className="mt-5">
            <Row>
              <Col sm={4}>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-3 rounded-pill"
                    aria-label="Search"
                  />
                  <Button className="rounded-pill" variant="primary">
                    Search
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
          <Link className="navbar-brand" to="/home">
            Food Purchase
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-primary" to="/adduser">
            Register/Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
