import Karte from "./Karte";
import stefanBarth from "./StefanBarth.webp"
import christianKropf from "./ChristianKropf.webp"
import florianArzberger from "./FlorianArzberger.webp"
import henrickSchula from "./HenrickSchula.webp"
import randolfWinter from "./RandolfWinter.webp"
import michaelHendel from "./MichaelHendel.webp"
import joachimKohlhofer from "./JoachimKohlhofer.webp"


import {Container, Row} from "react-bootstrap";

const Vorstand = () => {

    const vorstaende = [
        {
            name: "Stefan Barth",
            titel: "1. Vorsitzender",
            photo: stefanBarth
        },
        {
            name: "Florian Arzberger",
            titel: "2. Vorsitzender",
            photo: florianArzberger
        },
        {
            name: "Joachim Kohlhofer",
            titel: "Schatzmeister",
            photo: joachimKohlhofer
        },
        {
            name: "Michael Hendel",
            titel: "Schriftführer",
            photo: michaelHendel
        },
        {
            name: "Christian Kropf",
            titel: "Beisitzer Öffentlichkeitsarbeit",
            photo: christianKropf
        },
        {
            name: "Randolf Winter",
            titel: "Beisitzer Mitgliederverwaltung",
            photo: randolfWinter
        },
        {
            name: "Henrik Schula",
            titel: "Beisitzer Spartenleiter Faustball",
            photo: henrickSchula
        },
        ];



    return (
        <Container className={"abstandcontainer"}>
            <Row>
                {vorstaende.map(vorstand => <Karte data={vorstand} key={vorstand.name}/>)}
            </Row>
        </Container>
    )
}
export default Vorstand
