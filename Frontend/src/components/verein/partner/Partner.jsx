import partnerjpg from './Partner.jpg';
import {Col, Container, Row} from "react-bootstrap";
import vereinsheim from "../../startseite/vereinsheim.JPG";
import React from "react";


const Partner = () => {
    return(
        <Container>
            <div className={'abstandcontainer'}>
                <h1 className={'text-center'}>Werde Partner!</h1>
                <h6 className={'text-center'}>Willst du Partner werden und die Turnerschaft Thiersheim unterstützen? Dann melde dich
                    unter folgender E-Mail: <a href="mailto:ts.thiersheim@web.de">ts.thiersheim@web.de</a></h6>
                <Row className="justify-content-md-center">
                    <img src={partnerjpg}
                         className="img-fluid img-thumbnail"
                         alt="Bild der Partner"
                         width="100%"
                    />
                </Row>
            </div>
        </Container>
    )
}

export default Partner
