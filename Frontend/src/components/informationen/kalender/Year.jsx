import Kalendereintrag from "./Kalendereintrag";
import React from "react";

const Year = ({year, dates}) => {
    return(
        <>
            <h1 className={"text-center"}>{year}</h1>
            {dates.map(date => <Kalendereintrag data={date} key ={date.year+date.name}/>)}
        </>
    )
}

export default Year