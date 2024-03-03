import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import GradientSection from "./GradientSection";
import CustomButton from "./CustomButton";

export default NotFound => {
  return (
      <div>
        <GradientSection height="h-[100vh]">
          <Container>
            <Row className="min-h-dvh justify-content-center align-content-center">
              <Col className="text-center">
                <h1 className="display-1 text-white tracking-wider tt-interfaces">404</h1>
                <h2 className="text-white lastica my-10">Ops! Página não encontrada</h2>
                <a href="/"><CustomButton backgroundColor="#d63cbd" textColor="white">Voltar</CustomButton></a>
              </Col>
            </Row>
          </Container>
        </GradientSection>
      </div>
  );
}