import Eintrag from "./Eintrag";
import React from "react";
import Kalendereintrag from "./Kalendereintrag";

const Kalender2 = ({data}) => {
    return (
        <>
            {data.map(eintrag => <Kalendereintrag data={eintrag} key ={eintrag.name+eintrag.year}/>)}
        </>
    )
}

export default Kalender2
