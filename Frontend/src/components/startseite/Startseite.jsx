import React from "react";
import vereinsheim from "./vereinsheim.webp"
import {Col, Container, Row} from "react-bootstrap";
import Filler from "../testfiles/Filler";


const Startseite = () => {
    return(
        <Container>
            <div className={'abstandcontainer'}>
                <h1 className={'text-center'}>Willkommen auf der Website der Turnerschaft Thiersheim</h1>
                <h6 className={'text-center'}>Ein junger Verein - Gründung am 11. März 2012 - mit einer langen Tradition!</h6>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={10} xl={8}>
                        <img src={vereinsheim}
                             className="img-fluid img-thumbnail"
                             alt="Unser Vereinsheim"
                             width="100%"
                        />
                    </Col>
                </Row>
            </div>
            <Filler/>
        </Container>
    )
}

export default Startseite
