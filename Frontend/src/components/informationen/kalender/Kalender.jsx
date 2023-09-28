import React from "react";
import Year from "./Year";

const Kalender = () => {

    const kalenderdata = [
        {
            year: 2023,
            dates: [
                {
                    day: 8,
                    month: 10,
                    monthName: "Okt",
                    time: "10:30 - 17:00",
                    name: "Apfelmarkt Thiersheim",
                    place: "Thiersheim Schule",
                    group: "None"
                },
            ]
        },
        {
            year: 2024,
            dates: [
                {
                    day: 31,
                    month: 8,
                    monthName: "Aug",
                    time: "tbd",
                    name: "Deutsche Meisterschaft 1. Tag",
                    place: "Wunsiedel",
                    group: "Jugend Faustball"
                },
                {
                    day: 1,
                    month: 9,
                    monthName: "Sep",
                    time: "tbd",
                    name: "Deutsche Meisterschaft 2. Tag",
                    place: "Wunsiedel",
                    group: "Jugend Faustball"
                }
            ]
        }
    ];

    return (
        <>
            {kalenderdata.map(eintrag => <Year dates={eintrag.dates} year={eintrag.year} key ={eintrag.year}/>)}
        </>
    )
}

export default Kalender
