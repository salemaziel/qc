import React from "react";

import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";

import Hero from "./Hero";
import SectionQuote from "./section1Quote";
import SectionCTA from "./sectionCTA";
import HeroSectionTextOnly from "../../HeroSectionTextOnly";

const Homepage = () => (
  <>
    <Hero />
    <SectionQuote />
    <HeroSectionTextOnly
      bg="pinkbg"
      textColor="white"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="We’ve all been there..."
      subtitle=""
      description="lying awake at night and thinking to yourself…"
      listItem1="“I didn’t reach out...”"
      listItem2="“I didn’t speak up...”"
      listItem3='“I didn’t accomplish..."'
      style={{
        backgroundColor: "#ddc1ce",
      }}
    />
    <HeroSectionTextOnly
      bg="#ddc1ce"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="And then you realize..."
      subtitle="You didn’t do any of those things because you were too busy beating the crap out of yourself for things you can’t change..."
      description=""
      listTitle1="Too much?"
      listItem1="Too fat?"
      listItem2="Too fem?"
      listTitle2="Not enough?"
      listItem3="Not gay enough?"
      listItem4="Not passing?"
    />

    <SectionCTA
      bg="pinkbg"
      textColor="white"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="Together we can transform the shame and guilt..."
      description="we’ve constructed around our unique identities and use them to attract that love, purpose, and courage we’ve been missing out on."
      style={{ backgroundColor: "#ddc1ce" }}
    />
  </>
);

export default Homepage;
