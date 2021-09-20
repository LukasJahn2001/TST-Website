import React from "react";
import {Card, Col, Container} from "react-bootstrap";


const Karte = ({data}) => {

    return (

        <Col xs={12} md={6} xl={4}>
            <Container>
                <Card bg={"primary"} className={"abstand"}>
                    <Card.Header>{data.titel}</Card.Header>
                    <Card.Img variant="top" src={data.photo}/>
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            <p className="card-text">{data.text}</p>
                            <p className="card-text">Email: {data.email}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Col>
    )
}

export default Karte