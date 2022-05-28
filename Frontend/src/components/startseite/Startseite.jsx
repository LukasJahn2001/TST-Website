import React from "react";
import vereinsheim from "./vereinsheim.JPG"


const Startseite = () => {

    return(
        <div className={'abstandcontainer'}>
            <h1 className={'text-center'}>Willkommen auf der Website der Turnerschaft Thiersheim</h1>
            <h6 className={'text-center'}>Ein junger Verein - Gründung am 11. März 2012 - mit einer langen Tradition!</h6>
            <div className={'text-center'}>
                <img src={vereinsheim}
                     className="img-fluid img-thumbnail"
                     alt="Unser Vereinsheim"
                     width="50%"
                />
            </div>
        </div>
    )
}

export default Startseite
