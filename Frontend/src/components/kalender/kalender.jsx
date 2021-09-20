import {Col, Row} from "react-bootstrap";
import GoogleMapReact from 'google-map-react';

const Kalender = () => {

    const defaultProps = {
        center: {
            lat: 50.072846,
            lng: 12.127624
        },
        zoom: 17
    };

    const AnyReactComponent = ({ text }) => <div>{text}</div>;


    return(
        <Row>
            <Col xs={12} md={6}>
                <h3>Anfahrt:</h3>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>

            </Col>
            <Col xs={12} md={6}>
                <h3>Kalender:</h3>
                hier soll der Kalender hin.

            </Col>
        </Row>
    )
}

export default Kalender