import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";

import { Link } from "gatsby";

import CalendlyButton from "../../CalendlyButton";

import Flip from "react-reveal/Flip";

import Section from "../../Section";
import SectionHeader from "../../SectionHeader";

const SectionQuarandate = (props) => (
  <Section
    bg={props.bg}
    textColor={props.textColor}
    size={props.size}
    bgImage={props.bgImage}
    bgImageOpacity={props.bgImageOpacity}
  >
    <Container>
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
        listTitle1={props.listTitle1}
        listItem1={props.listItem1}
        listItem2={props.listItem2}
        listTitle2={props.listTitle2}
        listItem3={props.listTitle3}
        listItem4={props.listItem4}
        className="text-center"
      />
      </Fade>
      <Container className="justify-content-center">
          <Fade>
        <Row >
          <Col className="justify-content-center">
            <Button href="https://www.meetup.com/meetup-group-YYjFTSuM/" className="d-block brown-btn">Find Us On Meetup</Button>
          </Col>
          <Col className="justify-content-center">
            <Button href="https://www.facebook.com/queerconsciousSD/?modal=admin_todo_tour" className="d-block brown-btn">Find Us On Facebook</Button>
          </Col>
        </Row>
        </Fade>
      </Container>
    </Container>
  </Section>
);

export default SectionQuarandate;
