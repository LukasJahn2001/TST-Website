import Filler from "../testfiles/Filler";
import {Container} from "react-bootstrap";


const Datenschutz = () => {

    return(
        <Container className={"abstandcontainer"}>
            <h3>Datenschutz: </h3>
            <ul>
                <li>Einbindung des  Iframes (Cookies, Daten werden an GOOGLE geschickt,
                    Daten werden in die USA geschickt [evtl lösung durch butten,
                    welcher auf das Problem hinweist und dann erst die Karte freigibt])</li>
                <li>Speicherung der IP-Adresse</li>
                <li>Speicherung des Server-Logs</li>
            </ul>
            <Filler/>
        </Container>
    )
}

export default Datenschutz
