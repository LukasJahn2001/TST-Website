import DownloadFile from "./DownloadFIle";
import {Container, Table} from "react-bootstrap";

const downloadLinks = [
    {
        text: "Beitrittserklärung des Fördervereins",
        filename: '/files/Beitrittserklärung_FoerderVerein.pdf'
    },
    {
        text: "Beitrittserklärung der Turnerschaft Thiersheim",
        filename: '/files/TS_Thiersheim_Eintrittserklaerung_2016-03-28.pdf'
    },

    {
        text: "Datenschutz der Turnerschaft Thiersheim",
        filename: '/files/Datenschutz_info_Faustball_2022.pdf'
    },

]

const Dateien = () => {

    return(
        <div className={'abstandcontainer'}>
            <Container>
                <h1 className={'text-center'} >Download der Dateien</h1>
                <Table variant={"primary"}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Download</th>
                    </tr>
                    </thead>
                    <tbody>
                        {downloadLinks.map(downLink => <DownloadFile text={downLink.text} filename={downLink.filename}/>)}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Dateien