/*import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import {useState} from "react";
import beitritt from "./Beitrittserklärung_FoerderVerein.pdf"
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import DownloadLink from "react-download-link"*/

const Foerderverein = () => {

    /*const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (

        <Container className={"abstandcontainer"}>
            <Link to="./Beitrittserklärung_FoerderVerein.pdf" target="_blank" download>Download</Link>
            <DownloadLink
                label="Download"
                filename="public/files/TS_Thiersheim_Eintrittserklaerung_2016-03-28.pdf"
                exportFile={() => Promise.resolve("cached data here …")}
            />
            <Document
                file={beitritt}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber}/>
            </Document>
        </Container>
    );*/

    return (
        <div>
            Hello World
        </div>
    );
}

export default Foerderverein
