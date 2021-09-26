
import {Badge} from "react-bootstrap";
import React from "react";

const Trainer = ({trainer}) => {

    /*
        name: "Müller, Max",
        text: "Hello World 1",
        titel: "Vorstand",
        email: "mm@gmail.com",
        photo: Bild
    */

    return(

        <div key={trainer.name}>
            {trainer.name}{'  '}
            <Badge bg="primary">{trainer.email}</Badge>
        </div>
    )
}

export default Trainer
