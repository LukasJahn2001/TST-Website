import {Carousel, Container} from "react-bootstrap";
import schneeberg from './Schneeberg.JPG';

const FillerWithArticle = () => {

    return(
        <>
            <h3 className={"text-center"}>
                Überschrift des Artikels
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
                            <h3>Erstes Bild</h3>
                            <p>Beschreibung des ersten Bilds</p>
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
                            <h3>Zweites Bild</h3>
                            <p>Beschreibung des zweiten Bilds</p>
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
                            <h3>Drittes Bild</h3>
                            <p>Beschreibung des dritten Bilds</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            </span>
        </>
    )
}

export default FillerWithArticle
