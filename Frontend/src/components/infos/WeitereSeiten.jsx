import {Col, Container, Row} from "react-bootstrap";
import {Image} from "react-bootstrap";

import facebook from "./facebooklogo.png"
import faustball from "./faustballDotCom.png"
import insta from "./instaLogo.png"
import Header from "../navbar/Header";


const WeitereSeiten = () => {

    return(
        <>
            <Container className={"abstandcontainer"}>
                <Row>
                    <Col xs={12} md={4}>
                        <h3 className={"text-center"}>
                            Facebook
                        </h3>
                        <Image
                            src={facebook}
                            width={"100%"}
                            fluid={true}
                        />
                    </Col>
                    <Col xs={12} md={4} className={"align-content-center"}>
                        <h3 className={"text-center"}>
                            Instagram
                        </h3>
                        <Image
                            src={insta}
                            width={"100%"}
                            fluid={true}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <h3 className={"text-center"}>
                            Faustball.com
                        </h3>
                        <a href={"hh"}>
                            <Image
                                src={faustball}
                                width={"100%"}
                                fluid={true}
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WeitereSeiten

