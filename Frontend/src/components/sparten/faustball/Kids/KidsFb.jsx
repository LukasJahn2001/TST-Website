import {Col, Container, Row} from "react-bootstrap";
import RandUebersicht from "../../RandUebersicht";
import Bild from "../../../vorstand/Gesicht.png";
import FillerWithArticle from "../../../testfiles/FillerWithArticle";

const KidsFb = ({kalenderdata}) => {

    const name = "Kids Faustball";

    var kalenderKids =  kalenderdata.filter(function(date) {
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
                <Col xs={12} md={7} lg={8}>
                    <FillerWithArticle/>
                </Col>
                <RandUebersicht trainer={trainer} trainingsZeiten={traingsZeiten} name={name} kalenderdata={kalenderKids}/>
            </Row>
        </Container>
    )
}

export default KidsFb
