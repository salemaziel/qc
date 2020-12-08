import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Faq from "./Faq";

function FaqAccordianSection(props) {
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
        <Faq
          items={[
            {
              question: "Crisis Text Line",
              answer:
                "",
              listItem1: '24/7 text-based support line',
              listItem2: 'Text HOME to 741741',
              link: 'https://www.crisistextline.org/'
            },
            {
              question: "Transgender Hotline",
              answer:
                "",
                listItem1: '24/7 support line for transgender and questioning in crisis',
                listItem2: '1-877-565-8860',
                link: 'https://www.translifeline.org/hotline'
            },
            {
              question: "National Suicide Prevention Lifeline",
              answer:
                "24/7 support line for anyone in distress or considering suicide",
                listItem1: '1-888-724-7240 (English)',
                listItem2: '1-888-628-9454 (Español)',
                link: 'https://suicidepreventionlifeline.org/'
            },
            {
              question: "National Sexual Assault Hotline",
              answer:
                "",
                listItem1: '24/7 support line for sexual assault survivors',
                listItem2: '1-800-273-8255',
                link: 'https://www.rainn.org/'
            },
            {
              question: "Trevor Project",
              answer:
                "",
                listItem1: '24/7 support line for LGBTQ+ individuals in distress',
                listItem2: '1-866-488-7386',
                link: 'https://www.thetrevorproject.org/'
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default FaqAccordianSection;
