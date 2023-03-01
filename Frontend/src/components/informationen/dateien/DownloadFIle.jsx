import {FaFileDownload} from "react-icons/all";
import {Button} from "react-bootstrap";

const DownloadFile = ({filename, text}) => {

    return(
        <tr>
            <td>{text}</td>
            <td className="text-center"><Button href={filename} download><FaFileDownload/></Button></td>
        </tr>
    )
}

export default DownloadFile;
