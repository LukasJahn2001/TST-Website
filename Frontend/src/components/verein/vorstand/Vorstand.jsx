import Karte from "./Karte";
import Bild from "./Gesicht.png"
import stefan_barth from "./stefan_barth.jpg"


import {Container, Row} from "react-bootstrap";

const Vorstand = () => {

    const vorstaende = [
        {
            name: "Stefan Barth",
            text: "Hello World 1",
            titel: "1. Vorsitzender",
            email: "mm@gmail.com",
            photo: stefan_barth
        },
        {
            name: "Florian Arzberger",
            text: "Hello World 2",
            titel: "2. Vorsitzender",
            email: "dd@gmail.com",
            photo: Bild
        },
        {
            name: "Joachim Kohlhofer",
            text: "Hello World 3",
            titel: "Schatzmeister",
            email: "sb@gmail.com",
            photo: Bild
        },
        {
            name: "Christian Kropf",
            text: "Hello World 1",
            titel: "Beisitzer Öffentlichkeitsarbeit",
            email: "mmm@gmail.com",
            photo: Bild
        },
        {
            name: "Randolf Winter",
            text: "Hello World 2",
            titel: "Beisitzer Mitgliederverwaltung",
            email: "dmd@gmail.com",
            photo: Bild
        },
        {
            name: "Henrik Schula",
            text: "Hello World 3",
            titel: "Spartenleiter Faustball",
            email: "smb@gmail.com",
            photo: Bild
        },
        {
            name: "Markus Uhl",
            text: "Hello World 2",
            titel: "Kassenprüfer",
            email: "dmd@gmail.com",
            photo: Bild
        },
        {
            name: "Sarah Weinhold",
            text: "Hello World 2",
            titel: "Kassenprüfer",
            email: "dmd@gmail.com",
            photo: Bild
        }];



    return (
        <Container className={"abstandcontainer"}>
            <Row>
                {vorstaende.map(vorstand => <Karte data={vorstand} key={vorstand.email}/>)}
            </Row>
        </Container>
    )
}
export default Vorstand
