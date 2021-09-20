import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import {useState} from "react";
import beitritt from "./beitritt.pdf"
import {Container} from "react-bootstrap";

const Beitritt = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Container className={"abstandcontainer"}>
            <Document
                file={beitritt}
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </Container>
    );
}

export default Beitritt
