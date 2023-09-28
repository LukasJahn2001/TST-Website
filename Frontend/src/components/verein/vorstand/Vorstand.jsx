import Karte from "./Karte";
import Bild from "./Gesicht.png"
import stefanBarth from "./StefanBarth.JPG"
import christianKropf from "./ChristianKropf.JPG"
import florianArzberger from "./FlorianArzberger.JPG"
import henrickSchula from "./HenrickSchula.JPG"
import randolfWinter from "./RandolfWinter.JPG"
import michaelHendel from "./MichaelHendel.JPG"
import joachimKohlhofer from "./JoachimKohlhofer.JPG"


import {Container, Row} from "react-bootstrap";

const Vorstand = () => {

    const vorstaende = [
        {
            name: "Stefan Barth",
            text: "Hello World 1",
            titel: "1. Vorsitzender",
            email: "mm@gmail.com",
            photo: stefanBarth
        },
        {
            name: "Florian Arzberger",
            text: "Hello World 2",
            titel: "2. Vorsitzender",
            email: "dd@gmail.com",
            photo: florianArzberger
        },
        {
            name: "Joachim Kohlhofer",
            text: "Hello World 3",
            titel: "Schatzmeister",
            email: "sb@gmail.com",
            photo: joachimKohlhofer
        },
        {
            name: "Michael Hendel",
            text: "Hello World 2",
            titel: "Schriftführer",
            email: "dmd@gmail.com",
            photo: michaelHendel
        },
        {
            name: "Christian Kropf",
            text: "Hello World 1",
            titel: "Beisitzer Öffentlichkeitsarbeit",
            email: "mmm@gmail.com",
            photo: christianKropf
        },
        {
            name: "Randolf Winter",
            text: "Hello World 2",
            titel: "Beisitzer Mitgliederverwaltung",
            email: "dmd@gmail.com",
            photo: randolfWinter
        },
        {
            name: "Henrik Schula",
            text: "Hello World 3",
            titel: "Beisitzer Spartenleiter Faustball",
            email: "smb@gmail.com",
            photo: henrickSchula
        },
        ];



    return (
        <Container className={"abstandcontainer"}>
            <Row>
                {vorstaende.map(vorstand => <Karte data={vorstand} key={vorstand.email}/>)}
            </Row>
        </Container>
    )
}
export default Vorstand
