import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Fade from 'react-reveal/Fade'


import CalendlyButton from '../../CalendlyButton'

import Section from '../../Section'
import SectionHeader from '../../SectionHeader'


const SectionCTA = (props) => (
       <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
    <Container >
      <Fade>
      <SectionHeader
      title={props.title}
      subtitle={props.subtitle}
      description={props.description}
      description1={props.description1}
      description2={props.description2}
      description3={props.description3}
      description4={props.description4}
      description5={props.description5}
      description6={props.description6}
      description7={props.description7}
      className="text-center" />
</Fade>
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
    </Section>
);

export default SectionCTA;
