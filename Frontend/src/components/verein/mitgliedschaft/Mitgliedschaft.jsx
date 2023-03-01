import {Col, Container, Row} from "react-bootstrap";
import beitrittTST1 from "../mitgliedschaft/TST_Eintrittserklaerung_1.jpg";
import beitrittTST2 from "../mitgliedschaft/TST_Eintrittserklaerung_2.jpg";
import React from "react";

const Mitgliedschaft = () => {
    return(
        <Container>
            <div className={'abstandcontainer'}>
                <h1 className={'text-center'}>Beitritt Turnerschaft Thiersheim</h1>
                <h6 className={'text-center'}>Die Beitrittserklärung findest du <a href="/informationen/dateien">hier</a>.</h6>
            </div>
            <Row className="justify-content-md-center">
                <Col xs={11} md={9} xl={7}>
                        <img src={beitrittTST1}
                             className="img-fluid img-thumbnail"
                             alt="Eintrittserklärung TST"
                             width="100%"
                        />
                </Col>
                <Col xs={11} md={9} xl={7}>
                    <img src={beitrittTST2}
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