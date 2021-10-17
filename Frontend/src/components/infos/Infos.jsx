import {Col, Container, Row} from "react-bootstrap";
import Kalender from "./Kalender";

const Infos = ({kalenderdata}) => {






    return(
        <>
        <Container className={"abstandcontainer"}>
            <Row>
                <Col xs={12} md={6}>
                    <h3>Kalender:</h3>
                    <Kalender data={kalenderdata}></Kalender>

                </Col>
                <Col xs={12} md={6}>
                    <h3>Anfahrt:</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7245124080523!2d12.125365716287227!3d50.07272072238985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0ff3c58722987%3A0x65cb423a4ac8d3db!2sTurnerschaft%20Thiersheim!5e0!3m2!1sde!2sde!4v1634143061318!5m2!1sde!2sde"
                        width="100%" height="450" styles="border:0;" allowFullScreen="" loading="lazy" title={"Anfahrt"}>Anfahrt</iframe>

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Infos
