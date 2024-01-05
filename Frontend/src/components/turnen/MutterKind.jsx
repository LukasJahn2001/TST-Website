import {Carousel, Container} from "react-bootstrap";
import mutterkind1 from "./mutterkind1.webp";
import mutterkind2 from "./mutterkind2.webp";

const MutterKind = () => {

    return(
        <Container>
            <h3 className={"text-center"}>
                (Groß-)Eltern-Kind-Turnen
            </h3>
            <>
                Im (Groß-)Eltern-Kind-Turnen lernen Kinder ab dem Krabbelalter mit Unterstützung durch
                (Groß-)Eltern/Bezugspersonen die Vielfalt des Kinderturnens kennen. Die Kinder können vielseitige
                Bewegungserfahrungen sammeln und Koordination, Gleichgewichtssinn und Motorik an den Stationen der
                Bewegungslandschaft üben.
            </>
            <br/>
            <br/>
            <>
                In der Sportstunde sollten die Kinder bequeme Kleidung und Stoppersocken/Schläppchen/Turnschuhe tragen.
                Das Tragen von Straßenschuhen ist in der Turnhalle nicht gestattet.
            </>
            <br/>
            <br/>
            <>
                Bei Interesse könnt ihr gerne zum Schnuppertraining vorbeikommen.
            </>
            <br/>
            <br/>
            <>
                Diese findet immer Mittwoch von 16.00 bis 17.00 Uhr in der Schulturnhalle statt. In den Ferien ist kein
                Turnen möglich.
            </>
            <Container className={"text-center"} >
                <Carousel className={"abstandcontainer"}>
                    <Carousel.Item>
                        <img
                            alt=""
                            src={mutterkind1}
                            width="80%"
                            height="80%"
                            className="align-content-between"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt=""
                            src={mutterkind2}
                            width="80%"
                            height="80%"
                            className="d-inline-block align-top"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Container>
    )
}

export default MutterKind