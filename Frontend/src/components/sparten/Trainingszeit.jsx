import {Badge} from "react-bootstrap";
import {Accordion} from "react-bootstrap";

const Trainingszeit = ({trainingsZeit}) => {

    return(
        <Accordion.Item eventKey={trainingsZeit.eventKey}>
            <Accordion.Header>
                {trainingsZeit.name}
            </Accordion.Header>
            <Accordion.Body>
                {trainingsZeit.zeiten.map(eineZeit =>
                    <div key={eineZeit.name}>
                        {eineZeit.name}{'  '}
                        <Badge bg="primary">{eineZeit.zeit} Uhr</Badge>
                    </div>)}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Trainingszeit

