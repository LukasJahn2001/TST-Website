import Karte from "./Karte";
import Bild from "./Gesicht.png"
import {Container, Row} from "react-bootstrap";

const Vorstand = () => {

    const vorstaende = [
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
        },
        {
            name: "Schulze, Bettina",
            text: "Hello World 3",
            titel: "Vorstand",
            email: "sb@gmail.com",
            photo: Bild
        },
        {
            name: "Müller, Max",
            text: "Hello World 1",
            titel: "Vorstand",
            email: "mmm@gmail.com",
            photo: Bild
        },
        {
            name: "Doll, Dieter",
            text: "Hello World 2",
            titel: "Vorstand",
            email: "dmd@gmail.com",
            photo: Bild
        },
        {
            name: "Schulze, Bettina",
            text: "Hello World 3",
            titel: "Vorstand",
            email: "smb@gmail.com",
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
