import React from "react";
import Year from "./Year";

const Kalender = () => {

    const kalenderdata = [
        /*{
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
        },*/
        {
            year: 2024,
            months: [
                {
                    month: "Januar",
                    dates: [
                        {
                            day: "20.",
                            time: "10:00",
                            name: "Bayerische Meisterschaft weiblich U16",
                            place: "Erolzheim"
                        },
                        {
                            day: "27.",
                            time: "8:00",
                            name: "Bayerische Meisterschaft weiblich u18",
                            place: "Wunsiedel"
                        },
                        {
                            day: "27.",
                            time: "8:00",
                            name: "Bayerische Meisterschaft weiblich u14",
                            place: "Münchberg"
                        },
                        {
                            day: "28.",
                            time: "8:00",
                            name: "Bayerische Meisterschaft männlich u18",
                            place: "Wunsiedel"
                        }
                    ]
                },
                {
                    month: "Februar",
                    dates: [
                        {
                            day: "11.",
                            time: "10:00",
                            name: "Letzter Hallenspieltag der Herren",
                            place: "Bad Staffelstein"
                        }
                    ]
                },
                {
                    month: "August",
                    dates: [
                        {
                            day: "31.",
                            time: "tbd",
                            name: "Deutsche Meisterschaft männlich und weiblich U18 1. Tag",
                            place: "Thiersheim"
                        }
                    ]
                },
                {
                    month: "September",
                    dates: [
                        {
                            day: "1.",
                            time: "tbd",
                            name: "Deutsche Meisterschaft männlich und weiblich U18 2. Tag",
                            place: "Thiersheim"
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <>
            {kalenderdata.map(eintrag => <Year months={eintrag.months} year={eintrag.year} key={eintrag.year}/>)}
        </>
    )
}

export default Kalender
