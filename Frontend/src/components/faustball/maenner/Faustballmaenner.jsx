import {Carousel, Container} from "react-bootstrap";
import maenner1 from "./maenner1.png";
import Filler from "../../testfiles/Filler";

const Faustballmeanner = () => {


    return(
            <Container className={"text-center"}>
                <h3>
                    Faustballherren
                </h3 >
                <span>
                    Die Männer der TST melden zwischen einer und zwei Mannschaften in der Bezirksliga oder Landesliga.
                </span>

                <Carousel className={"abstandcontainer"}>
                    <Carousel.Item>
                        <img
                            alt=""
                            src={maenner1}
                            width="80%"
                            height="80%"
                            className="align-content-between"
                        />
                    </Carousel.Item>
                </Carousel>
                <Filler/>
                <Filler/>
            </Container>
    )

}


export default Faustballmeanner