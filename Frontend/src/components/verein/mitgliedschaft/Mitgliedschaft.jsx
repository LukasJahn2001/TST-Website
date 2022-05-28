import {Col, Container, Row} from "react-bootstrap";
import beitrittTST from "../mitgliedschaft/Beitritt_TST.jpg";
import React from "react";

const Mitgliedschaft = () => {
    return(
        <Container>
            <div className={'abstandcontainer'}>
                <h1 className={'text-center'}>Beitritt Turnerschaft Thiersheim</h1>
                <h6 className={'text-center'}>Die Beitrittserklärung findest du <a href="/informationen/dateien">hier</a>.</h6>
            </div>
            <Row className="justify-content-md-center">
                <Col xs={12} md={10} xl={8}>
                        <img src={beitrittTST}
                             className="img-fluid img-thumbnail"
                             alt="Eintrittserklärung TST"
                             width="100%"
                        />
                </Col>
            </Row>
        </Container>
    )
}

export default Mitgliedschaft