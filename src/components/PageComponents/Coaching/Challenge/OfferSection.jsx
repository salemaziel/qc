import React from "react";

import Section from "../../../Section";
import SectionHeader from "../../../SectionHeader";

import { Container, Row, Col, Button } from "react-bootstrap";

import offerStyles from "./challenge.module.css";
import {Link} from "gatsby"

const OfferSection = (props) => {
  return (
    <>
      <Section
        bg={props.bg}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
        size={props.size}
        textColor={props.textColor}
        className={props.className}
      >
        <Container>
          <Row>
            <Col>
              <p className={offerStyles.offerTopTitle}>
                
                {props.offerTopTitle}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className={offerStyles.offerMainTitle}>
                
                {props.offerMainTitle}
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mb-3 pb-3">
            <Col xs={12} md={8}>
              <ul className="">
                <li>
                  
                  {props.list1}
                </li>
                <li>
                  
                  {props.list2}
                </li>
                <li>
                  
                  {props.list3}
                </li>
                <li>
                {props.list4}
                </li>
                <li>
                  
                  {props.list5}
                </li>
                <li>
                {props.list6}

                </li>
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-center text-center mt-4">
            <Col>
            <p className={offerStyles.offerValued}>
                
                {props.offerValued}
                </p>
                </Col>
          </Row>
          <Row className="justify-content-center text-center my-3">
            <Col>
            <p className={offerStyles.offerPrice}>
          
           {props.offerPrice}
                </p>
            </Col>
          </Row>
          <Row className="justify-content-center text-center my-3">
            <Col>
                <Button href="https://members.queerconscious.com/offers/B8vJdkRG" className="d-block brown-btns">
                    Register Now
                </Button>
            </Col>
          </Row>
          <Row className="justify-content-center text-center my-3">
            <Col>
                <p className="">
                *MUST BE 18 YEARS OR OLDER TO PARTICIPATE*
                <br />
If you are under 18, <Link to="/contact">feel free to reach out</Link> and I can connect you with free programs meant just for you.
                </p>
            </Col>
          </Row>

        </Container>
      </Section>
    </>
  );
};

export default OfferSection;
