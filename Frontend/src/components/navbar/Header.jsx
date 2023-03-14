import faustballLogobearbeitet from './logo_ts_bearbeitet.jpg';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


const Header = () => {

    return (
        <Navbar bg="primary" expand="lg" variant={"dark"} className={"sticky-top"}>
            <Container>
                <Navbar.Brand href="/">
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
                            <NavDropdown.Item href="/verein/vorstand">Vorstand</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/geschichte">Geschichte</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/partner">Partner</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/foerderverein">Förderverein</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/mitgliedschaft">Mitgliedschaft</NavDropdown.Item>
                        </NavDropdown>
                        {/*<NavDropdown title="Sportbetrieb" id="sportbetrieb">
                            <NavDropdown.Item href="/sportbetrieb/breitensport">Breitensport</NavDropdown.Item>
                            <NavDropdown.Item href="/sportbetrieb/faustball">Faustball</NavDropdown.Item>
                            <NavDropdown.Item href="/sportbetrieb/turnen">Turnen</NavDropdown.Item>
                        </NavDropdown>*/}
                        <NavDropdown title="Faustball" id="faustball">
                            <NavDropdown.Item href="/faustball/herren">Herren</NavDropdown.Item>
                            <NavDropdown.Item href="/faustball/frauen">Frauen</NavDropdown.Item>
                            <NavDropdown.Item href="/faustball/jugend">Jugend</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Breitensport" id="c">
                            <NavDropdown.Item href="/breitensport/breitensport">Breitensport</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Turnen" id="turnen">
                            <NavDropdown.Item href="/turnen/turnen">Turnen</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Informationen" id="informationen">
                            <NavDropdown.Item href="/informationen/kalender">Kalender</NavDropdown.Item>
                            <NavDropdown.Item href="/informationen/sportanlagen">Sportanlagen</NavDropdown.Item>
                            <NavDropdown.Item href="/informationen/dateien">Dateien</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/dm2023">DM</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header
