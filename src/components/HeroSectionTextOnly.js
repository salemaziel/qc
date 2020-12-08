import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
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
          className="text-center"
        />
        </Fade>
      </Container>
    </Section>
  );
}

export default HeroSectionTextOnly;
