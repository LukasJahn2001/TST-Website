import {useState, useEffect} from "react";
import './Countdown.css';
import {getRemainingTimeUntilMsTimestamp} from './CountdownLogic';

const defaultremainingtime = {
    sekunden: '00',
    minuten: '00',
    stunden: '00',
    tage: '00'
}

const Countdown = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultremainingtime);

    useEffect(() => {
        const intervalID = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalID);
    }, [countdownTimestampMs])

    function  updateRemainingTime (countdownTime) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdownTime));
    }

    return(

            <div className={'countdown-margin'}>
                <p className={'countdown-timer'}>
                    {remainingTime.tage} Tage
                </p>
                <p className={'countdown-timer'}>
                    {remainingTime.stunden} Stunden
                </p>
                <p className={'countdown-timer'}>
                    {remainingTime.minuten} Minuten
                </p>
                <p className={'countdown-timer'}>
                    {remainingTime.sekunden} Sekunden
                </p>
            </div>
    );
}

export default Countdown;