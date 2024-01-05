import {Carousel, Container} from "react-bootstrap";
import jugend1 from "./jugend1.webp";
import jugend2 from "./jugend2.webp"
import Filler from "../../testfiles/Filler";

const Faustballjugend = () => {

    return(
        <Container className={"text-center"}>
            <h3>
                Faustballjugend
            </h3 >
            <span>
                Die Jugend der TST reicht von mehreren mixed U8 Manschaften über die männliche U18 bis zur weiblichen U18.
            </span>

                <Carousel className={"abstandcontainer"}>
                    <Carousel.Item>
                        <img
                            alt=""
                            src={jugend1}
                            width="80%"
                            height="80%"
                            className="align-content-between"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt=""
                            src={jugend2}
                            width="80%"
                            height="80%"
                            className="d-inline-block align-top"
                        />
                    </Carousel.Item>
                </Carousel>
            <Filler/>
            <Filler/>
        </Container>
    )
}

export default Faustballjugend