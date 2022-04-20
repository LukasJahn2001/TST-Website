import {Container, Nav, Navbar} from "react-bootstrap";

const Footer = () => {

    return(
        <Navbar bg="primary" expand="lg" sticky="bottom" variant={"dark"}>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/website/impressum">Impressum</Nav.Link>
                    <Nav.Link href="/website/datenschutz">Datenschutz</Nav.Link>
                    <Nav.Link href="/verein/beitritt">Beitritt</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer
