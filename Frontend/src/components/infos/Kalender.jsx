import {Table} from "react-bootstrap";
import React from "react";
import Eintrag from "./Eintrag";


const Kalender = ({data}) => {

    /*{
        year: 2021,
            day: 22,
        month: 1,
        time: 2021,
        name: "Vereisfest",
        place: "Thiersheim"
    },*/


    return(
        <>
            <Table striped variant={"primary"}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Ort</th>
                    <th>Zeit</th>
                </tr>
                </thead>
                <tbody>
                    {data.map(eintrag => <Eintrag eintrag={eintrag}/>)}
                </tbody>
            </Table>
        </>
    )
}

export default Kalender
