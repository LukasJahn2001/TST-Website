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
                        <Nav.Link href="/sparten/turnen">Turnen</Nav.Link>
                        <Nav.Link href="/sparten/leichtathletik">Leichtathletik</Nav.Link>
                        <NavDropdown title="Faustball" id="faustball">
                            <NavDropdown.Item href="/sparten/faustball/maenner">Männer</NavDropdown.Item>
                            <NavDropdown.Item href="/sparten/faustball/frauen">Frauen</NavDropdown.Item>
                            <NavDropdown.Item href="/sparten/faustball/jugend">Jugend</NavDropdown.Item>
                            <NavDropdown.Item href="/sparten/faustball/kids">Kids</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Verein" id="verein">
                            <NavDropdown.Item href="/verein/geschichte">Geschichte</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/aktuelles">Aktuelles</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/vorstand">Vorstandschaft</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/beitritt">Beitritt</NavDropdown.Item>
                            <NavDropdown.Item href="/verein/foerderverein">Förderverein</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href={"/verein/informationen"}>Infos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header
