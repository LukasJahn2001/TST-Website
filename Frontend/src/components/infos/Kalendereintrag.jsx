import {Col, Container, Row} from "react-bootstrap";

const Kalendereintrag = ({data}) => {
    return(
        <Container className={"kaleintrag"}>
            <Row>
                <Col xs={2} md={2} lg={1}>
                    <div className={"kaleintragzeit"}>
                        <h6 className={"month"}>
                            {data.monthName}
                        </h6>
                        <h6 className={"day"}>
                            {data.day}
                        </h6>
                    </div>
                </Col>
                <Col xs={10} md={10} lg={11}>
                    <div className={"kaleintragtextbox"}>
                        <div className={"kalHead"}>
                            {data.name}
                        </div>
                        <h6 className={"kalBody"}>
                            {data.place}, {data.time} Uhr
                        </h6>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Kalendereintrag;
