import React from "react";
import Year from "./Year";

const Kalender = () => {

    const kalenderdata = [
        {
            year: 2022,
            dates: [
                {
                    day: 29,
                    month: 1,
                    monthName: "Jan",
                    time: "tbd",
                    name: "Bayrische Meisterschaft Halle weibliche U16",
                    place: "Wunsiedel",
                    group: "Jugend Faustball"
                },
                {
                    day: 30,
                    month: 1,
                    monthName: "Jan",
                    time: "tbd",
                    name: "Bayrische Meisterschaft Halle männliche U16",
                    place: "Wunsiedel",
                    group: "Jugend Faustball"
                },
                {
                    day: 12,
                    month: 3,
                    monthName: "Mär",
                    time: "tbd",
                    name: "Jahreshauptversammlung der TST",
                    place: "Thiersheim",
                    group: "All"
                },
                {
                    day: 4,
                    month: 6,
                    monthName: "Jun",
                    time: "14",
                    name: "Sommerfest \"10 Jahre TST\" und Vereinsheimeinweihung",
                    place: "Thiersheim",
                    group: "All"
                },
                {
                    day: 5,
                    month: 6,
                    monthName: "Jun",
                    time: "11.15",
                    name: "TST-Faustball-Gaudi-Tunier",
                    place: "Thiersheim",
                    group: "All"
                },
                {
                    day: 27,
                    month: 12,
                    monthName: "Dez",
                    time: "tbd",
                    name: "Faustballer-Weihnachtsfeier",
                    place: "Thiersheim",
                    group: "All"
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
