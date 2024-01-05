import {Container} from "react-bootstrap";
import sportanlagenThiersheimMap from "./SportanlagenThiersheim.webp";
import turnhalleWunsiedelMap from "./TurnhalleWunsiedelMap.webp";
import React from "react";


const Sportanlagen = () => {

    return(
        <Container className={"text-center abstandcontainer"}>
            <h1 className={"text-center"}>
                Sportplatz und Turnhalle Thiersheim
            </h1>
            <p>
                Den Google Maps Link für die Anreise nach Thiersheim findest du <a href="https://goo.gl/maps/iuzyNrExbAipSv367" target="_blank" rel="noreferrer">hier</a>!
            </p>
            <img
                alt="Sportanlagen Thiersheim"
                src={sportanlagenThiersheimMap}
                width="80%"
                height="100%"
                className="align-content-between"
            />
            <p>
                <br/>
            </p>
            <h1 className={"text-center"}>
                Turnhalle Wunsiedel
            </h1>
            <p>
                Den Google Maps Link für die Anreise nach Wunsiedel findest du <a href="https://goo.gl/maps/5BKW1tBoj8ze8zSt8" target="_blank" rel="noreferrer">hier</a>!
            </p>
            <img
                alt="Turnhalle Wunsiedel"
                src={turnhalleWunsiedelMap}
                width="80%"
                height="100%"
                className="align-content-between"
            />
        </Container>
    )
}

export default Sportanlagen