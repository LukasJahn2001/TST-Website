import {Accordion, Col} from "react-bootstrap";
import Trainingszeit from "./Trainingszeit";
import Trainer from "./Trainer";
import React from "react";

const RandUebersicht = ({trainer, trainingsZeiten, name}) => {

    return(
        <>
            <Col xs={12} md={5} lg={4}>
                <h3 className={"text-center"}>
                    {name}
                </h3>
                <Accordion defaultActiveKey={"none"}>
                    {trainingsZeiten.map(zeit => <Trainingszeit trainingsZeit={zeit} key={zeit.name}/>)}
                    <Accordion.Item eventKey={"trainer"} key={"trainerItem"}>
                        <Accordion.Header key={"trainerHeader"}>
                            Trainer
                        </Accordion.Header>
                        <Accordion.Body key={"trainerBody"}>
                            {trainer.map(einTrainer => <Trainer trainer={einTrainer} key={trainer.name}/>)}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </>
    )
}

export default RandUebersicht
