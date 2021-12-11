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
                    time: "tbd",
                    name: "Sommerfest \"10 Jahre TST\" und Vereinsheimeinweihung",
                    place: "Thiersheim",
                    group: "All"
                },
                {
                    day: 3,
                    month: 9,
                    monthName: "Sep",
                    time: "tbd",
                    name: "TST-Faustball-Gaudi-Tunier",
                    place: "Thiersheim",
                    group: "All"
                },
                {
                    day: 10,
                    month: 9,
                    monthName: "Sep",
                    time: "tbd",
                    name: "Ausweichtermin TST-Faustball-Gaudi-Tunier",
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
            year: 2023,
            dates: [
                {
                    day: 29,
                    month: 1,
                    monthName: "Jan",
                    time: "tbd",
                    name: "Bayrische Meisterschaft Halle weibliche U16",
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
