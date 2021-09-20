import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import {useState} from "react";
import beitritt from "./Beitrittserklärung_FoerderVerein.pdf"

const Foerderverein = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (

        <>
            <Document
                file={beitritt}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber}/>
            </Document>
        </>
    );
}

export default Foerderverein