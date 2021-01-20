import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

import Row from "react-bootstrap/Row"



import HeroImage from '../../../images/hero-image.jpg'
import Logo from '../../../images/logo-image.png'

import LazyHero from 'react-lazy-hero'

import heroStyles from "./home.module.css";


const Hero = () => (
  <>
  <section /*className={heroStyles.HeroSection}*/>
  <LazyHero
        /*imageSrc={props.bgImage}*/
        imageSrc={HeroImage}
        isCentered={true}
        isFixed={false}
        minHeight="100vh"
        opacity={0.2}
        color='#000'
      >


    <Container fluid="md">
        <Row className={heroStyles.qcRow}>

        <Col >
        <div className="text-center NoDesktop">
          <h2 className="NoDesktop text-white text-center font-italic">
          “Find out who you are and do it on purpose.”
          </h2>
          <h4 className="NoDesktop text-white text-center ">- Dolly Parton</h4>
          </div> 
          <div className="NoMobile">
            <img src={Logo} alt="Queer Conscious Logo" className="logoHero" />
          </div>

        </Col>

      </Row>
      </Container>
      </LazyHero>
    {/*<HeroMobile />*/}
  </section>
  </>
);

export default Hero;
