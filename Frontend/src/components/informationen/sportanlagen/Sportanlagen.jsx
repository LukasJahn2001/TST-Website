import {Carousel, Container} from "react-bootstrap";
import schneeberg from "../../testfiles/Schneeberg.JPG";
import vereinsheim from "./vereinsheim.JPG"

const Sportanlagen = () => {

    return(
        <Container>
            <h3 className={"text-center"}>
                Sportplatz Thiersheim
            </h3>
            <Container>
                <Carousel className={"abstandcontainer"}>
                    <Carousel.Item>
                        <img
                            alt=""
                            src={schneeberg}
                            width="100%"
                            height="100%"
                            className="align-content-between"
                        />
                        <Carousel.Caption>
                            <h3>Der Sportplatz</h3>
                            <p>what3words Adresse des Sportplatzes: <a className={"test"} href="https://w3w.co/ankündigungen.eisbär.echsen">///ankündigungen.eisbär.echsen</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt=""
                            src={vereinsheim}
                            width="100%"
                            height="100%"
                            className="d-inline-block align-top"
                        />

                        <Carousel.Caption>
                            <h3>Das Vereinsheim</h3>
                            <p>what3words Adresse des Vereinsheims: <a className={"test"} href="https://w3w.co/übrigens.nicken.beträgt">///übrigens.nicken.beträgt</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt=""
                            src={schneeberg}
                            width="100%"
                            height="100%"
                            className="d-inline-block align-top"
                        />

                        <Carousel.Caption>
                            <h3>Der Parkplatz</h3>
                            <p>what3words Adresse zum Parken: <a className={"test"} href="https://w3w.co/ruck.ziegelrot.reim">///ruck.ziegelrot.reim</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Container>
    )
}

export default Sportanlagen