import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import Fade from 'react-reveal/Fade'

function HeroSectionTextOnly(props) {
  return (
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
          listTitle1={props.listTitle1}
          listItem1={props.listItem1}
          listItem2={props.listItem2}
          listTitle2={props.listTitle2}
          listItem3={props.listItem3}
          listItem4={props.listItem4}
          size={1}
          spaced={true}
          className="text-center font-weight-bold h5"
          description1={props.description1}
          description2={props.description2}
          description3={props.description3}
          description4={props.description4}
          description5={props.description5}
          description6={props.description6}
          description7={props.description7}
        />
        </Fade>
        <Row className="justify-content-center">
          <Col xs={4} md={4}>
              <div className="w-100" >
                <img src={props.bottomPic} alt={props.bottomPicAlt} className="w-100"/>
              </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSectionTextOnly;
