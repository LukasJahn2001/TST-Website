import Filler from "../../../testfiles/Filler";
import Bild from "../../../vorstand/Gesicht.png";
import {Col, Container, Row} from "react-bootstrap";
import RandUebersicht from "../../RandUebersicht";


const FrauenFb = () => {
    const trainer = [
        {
            name: "Müller, Max",
            text: "Hello World 1",
            titel: "Vorstand",
            email: "mm@gmail.com",
            photo: Bild
        },
        {
            name: "Doll, Dieter",
            text: "Hello World 2",
            titel: "Vorstand",
            email: "dd@gmail.com",
            photo: Bild
        }];

    const traingsZeiten = [
        {
            name: "Sommertraining",
            eventKey: 0,
            zeiten: [
                {
                    zeit: "18:30",
                    name: "Freitagstrainig",
                },
                {
                    zeit: "18:30",
                    name: "Samstagstraining",
                },
            ],
        },
        {
            name: "Wintertraining",
            eventKey: 1,
            zeiten: [
                {
                    zeit: "18:30",
                    name: "Freitagstrainig",
                },
                {
                    zeit: "18:30",
                    name: "Samstagstraining",
                },
                {
                    zeit: "12:30",
                    name: "Montagstraining",
                },
            ],
        }];

    const name = "Frauen Faustball";


    return(
        <Container className={"abstandcontainer"}>
            <Row>
                <RandUebersicht trainer={trainer} trainingsZeiten={traingsZeiten} name={name}/>
                <Col xs={12} md={7}>
                    <Filler/>
                </Col>
            </Row>
        </Container>
    )
}

export default FrauenFb
