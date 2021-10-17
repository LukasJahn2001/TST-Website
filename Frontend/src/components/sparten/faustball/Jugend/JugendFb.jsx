import Filler from "../../../testfiles/Filler";
import {Col, Container, Row} from "react-bootstrap";
import RandUebersicht from "../../RandUebersicht";
import Bild from "../../../vorstand/Gesicht.png";

const JugendFb = ({kalenderdata}) => {

    const name = "Jugend Faustball";

    var kalenderJugend =  kalenderdata.filter(function(date) {
        return date.group === name;
    });

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
                        zeit: "Fr. 18:30",
                        name: "männlich U18",
                    },
                    {
                        zeit: "Sa. 18:30",
                        name: "Samstagstraining",
                    },
                ],
        },
        {
                name: "Wintertraining",
                eventKey: 1,
                zeiten: [
                    {
                        zeit: "Fr. 18:30",
                        name: "Freitagstrainig",
                    },
                    {
                        zeit: "Sa. 18:30",
                        name: "Samstagstraining",
                    },
                    {
                        zeit: "Mo. 12:30",
                        name: "Montagstraining",
                    },
                ],
        }];




    return(
        <Container className={"abstandcontainer"}>
            <Row>
                <RandUebersicht trainer={trainer} trainingsZeiten={traingsZeiten} name={name} kalenderdata={kalenderJugend}/>
                <Col xs={12} md={7} lg={8}>
                        <Filler/>
                </Col>
            </Row>
        </Container>
    )
}

export default JugendFb
