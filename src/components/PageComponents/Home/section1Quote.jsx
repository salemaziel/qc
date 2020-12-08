import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Fade from 'react-reveal/Fade'


import CalendlyButton from '../../CalendlyButton'

import Flip from 'react-reveal/Flip'

import newpatientStyles from "./home.module.css";

const SectionQuote = () => (
  <section className={newpatientStyles.NewPatientSection}>
    <Container >
      <Row className="NoMobile text-center">
        <Col>
        <Flip top cascade>
          <h2>“Find out who you are and do it on purpose.”</h2>
          </Flip>
          <br />
          <Flip top cascade>
          <p>- Dolly Parton</p>
          </Flip>
          <br />
          <hr />
          <br />
        </Col>
      </Row>
      <Container>
      <Row className="justify-content-center">
        <Col >
        <Fade>
        <CalendlyButton />
        </Fade>
        </Col>
      </Row>
      </Container>
    </Container>
  </section>
);

export default SectionQuote;
