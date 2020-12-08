import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Testimonials2 from "./Testimonials2";

function TestimonialsAvTopSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Testimonials2
          items={[
            {
              avatar: "",
              name: "Sam",
              testimonial:
                "Nathan helped to guide me in my own realization of the ways I let fear control my life and helped me recognize the root of destructive thought patterns. He was kind and caring yet pushed me to answer difficult questions about what I really want to do and what has been stopping me from accomplishing my goals...",
              company: "Berkeley, CA",
            },
            {
              avatar: "",
              name: "Josh",
              testimonial:
                "One of the kindest souls I have ever met. Not everyone understands the importance of empathy and to feel not only cared for—but truly understood—was invaluable.",
              company: "Los Angeles, CA",
            },
            {
              avatar: "",
              name: "Jenny",
              testimonial:
                "Nathan holds a very loving, safe, peaceful yet playful container. I feel like we called missing parts home and I'm so grateful Nathan appears to be taking the brave stance of being a force of love and truth in the world.",
              company: "Portland, OR",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default TestimonialsAvTopSection;
