import React from "react";
import Month from "./Month";

const Year = ({year, months}) => {
    return(
        <>
            <h1 className={"text-center"}>{year}</h1>
            {months.map(month => <Month year={year} month={month.month} dates={month.dates} key={year + month.month}/>)}
        </>
    )
}

export default Year