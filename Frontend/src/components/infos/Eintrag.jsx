import React from "react";


const Eintrag = ({eintrag}) => {

    /*{
        year: 2021,
        day: 22,
        month: 1,
        time: 23 Uhr,
        name: "Vereisfest",
        place: "Thiersheim"
    },*/


    return(
        <tr>
            <td>{eintrag.name}</td>
            <td>{eintrag.place}</td>
            <td>{eintrag.day}.{eintrag.month}.{eintrag.year} um {eintrag.time}</td>
        </tr>
    )
}

export default Eintrag
