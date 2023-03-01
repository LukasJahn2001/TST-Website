import {Container} from "react-bootstrap";
import Filler from "../../testfiles/Filler";


const Geschichte = () => {

    return (
        <Container className={"abstandcontainer"}>
            <h1 className={'text-center'}>Geschichte der Turnerschaft Thiersheim</h1>
            <ul>
                <li>1924: Erste Faustballmannschaft in Thiersheim</li>
                <li>2012: Gründung des TS Thiersheim am 11. März</li>
                <li>2022: Zehn Jahre TST</li>
                <li>2024: 100 Jahre Faustball in Thiersheim</li>
            </ul>
            <Filler/>
        </Container>
    )
}
export default Geschichte
