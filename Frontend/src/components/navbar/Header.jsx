import faustballLogobearbeitet from './logo_ts_bearbeitet.jpg';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


const Header = () => {

    return (
        <Navbar bg="primary" expand="lg" variant={"dark"} className={"sticky-top"}>
            <Container>
                <Navbar.Brand href="/startseite">
                    <img
                        alt=""
                        src={faustballLogobearbeitet}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Turnerschaft Thiersheim
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Verein" id="Verein">
                            <NavDropdown.Item href="/verein/Vorstand">Vorstand</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/Geschichte">Geschichte</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/Partner">Partner</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/Förderverein">Förderverein</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/Mitgliedschaft">Mitgliedschaft</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sportbetrieb" id="sportbetrieb">
                            <NavDropdown.Item href="/sportbetrieb/breitensport">Breitensport</NavDropdown.Item>
                            <NavDropdown.Item href="/sportbetrieb/faustball">Faustball</NavDropdown.Item>
                            <NavDropdown.Item href="/sportbetrieb/turnen">Turnen</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Informationen" id="informationen">
                            <NavDropdown.Item href="/informationen/kalender">Kalender</NavDropdown.Item>
                            <NavDropdown.Item href="/informationen/sportanlagen">Sportanlagen</NavDropdown.Item>
                            <NavDropdown.Item href="/informationen/dateien">Dateien</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header
