import {Accordion, Col} from "react-bootstrap";
import Trainingszeit from "./Trainingszeit";
import Trainer from "./Trainer";

const RandUebersicht = ({trainer, trainingsZeiten, name}) => {

    return(
        <>
            <Col xs={12} md={5} lg={4}>
                <h3 className={"text-center"}>
                    {name}
                </h3>
                <Accordion defaultActiveKey={"none"}>
                    {trainingsZeiten.map(zeit => <Trainingszeit trainingsZeit={zeit}/>)}
                </Accordion>
                <h3 className={"text-center"}>
                    Trainer
                </h3>
                {trainer.map(einTrainer => <Trainer trainer={einTrainer}/>)}
            </Col>
        </>
    )
}

export default RandUebersicht
