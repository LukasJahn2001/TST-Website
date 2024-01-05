import Kalendereintrag from "./Kalendereintrag";
import React from "react";

const Month = ({year, month, dates}) => {
    return(
        <>
            <h4 className={"text-center"}>{month}</h4>
            {dates.map(date => <Kalendereintrag data={date} key ={year + month + date.name}/>)}
        </>
    )
}

export default Month