import React from 'react'
import Section from "../../../Section"

import { Container, Row, Col } from "react-bootstrap"

const ClimberSection = (props) => {
    return(
        <>
        <Section
        bg={props.bg}
        bgImageOpacity={props.bgImageOpacity}
        bgImage={props.bgImage}
        size={props.size}
        textColor={props.textColor}
        >
            <Container>
                <Row className="justify-content-center text-center mt-5 pt-5">
                    <Col className="mt-5 pt-5">
                        <p className="font-weight-bold mt-5 pt-5">
                            "You either walk inside your story and OWN IT or you stand outside your story and hustle for your worthiness."
                        </p>
                    </Col>
                </Row>
            </Container>

        </Section>

        </>
    )
}

export default ClimberSection