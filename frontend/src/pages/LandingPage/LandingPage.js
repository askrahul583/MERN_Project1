import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome To Keep Notes</h1>
              <p className="subtitle">One Place To Keep All Your Notes</p>
            </div>
            <div className="btnContainer">
              <a href="/login">
                <Button
                  size="lg"
                  className="btnLogin"
                  variant="outline-primary"
                >
                  <strong>Login</strong>
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="btnLogin"
                  variant="outline-primary"
                >
                  <strong>Sign Up</strong>
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
