import DownloadFile from "./DownloadFIle";
import {Container, Table} from "react-bootstrap";
import Filler from "../../testfiles/Filler";

const downloadLinks = [
    {
        text: "Beitrittserklärung des Fördervereins",
        filename: '/files/Beitrittserklärung_FoerderVerein.pdf'
    },
    {
        text: "Beitrittserklärung der Turnerschaft Thiersheim",
        filename: '/files/TST_Eintrittserklaerung.pdf'
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
                        <th className="text-center">Download</th>
                    </tr>
                    </thead>
                    <tbody>
                        {downloadLinks.map(downLink => <DownloadFile text={downLink.text} filename={downLink.filename}/>)}
                    </tbody>
                </Table>
            </Container>
            <Filler/>
        </div>
    )
}

export default Dateien