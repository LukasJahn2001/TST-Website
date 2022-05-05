
import foederverein from './Betritt_Foederverein.png';
import {Col, Container, Row} from "react-bootstrap";
import React from "react";

const Foerderverein = () => {



    return (
        <Container>
            <div className={'abstandcontainer'}>
                <h1 className={'text-center'}>Förderverein Faustball in Thiersheim e.V.</h1>
                <h6 className={'text-center'}>Möchtest du den Faustball in Thiersheim gezielt unterschützen, dann trete den "Förderverein Faustball in Thiersheim e.V." bei.
                    Dieser unterstützt den Faustball in Thiersheim zum Beispiel mit Bällen, Trikots und Fahrtkosten von weit entfernten Spieltagen.
                    Die Beitrittserklärung finden du <a href="/informationen/dateien">hier</a>
                    .</h6>
            </div>
            <Row className="justify-content-md-center">
                <Col xs={12} md={10} xl={8}>
                        <img src={foederverein}
                             className="img-fluid img-thumbnail"
                             alt="Eintrittserklärung Foerderverein"
                             width="100%"
                        />
                </Col>
            </Row>
        </Container>
    );
}

export default Foerderverein
