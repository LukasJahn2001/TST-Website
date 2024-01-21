import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp (timestampMs) {
    const timestampDayJS = dayjs(timestampMs);
    const nowDayJS = dayjs();
    return  {
        sekunden: getRemainingSeconds(nowDayJS, timestampDayJS),
        minuten: getRemainingMinutes(nowDayJS, timestampDayJS),
        stunden: getRemainingHours(nowDayJS, timestampDayJS),
        tage: getRemainingDays(nowDayJS, timestampDayJS)
    };
}

function getRemainingSeconds(nowDayJS,timestampDayJS) {
    return padWithZeros(timestampDayJS.diff(nowDayJS, 'seconds') % 60, 2);
}

function getRemainingMinutes(nowDayJS,timestampDayJS) {
    return padWithZeros(timestampDayJS.diff(nowDayJS, 'minutes') % 60, 2);
}

function getRemainingHours(nowDayJS,timestampDayJS) {
    return padWithZeros(timestampDayJS.diff(nowDayJS, 'hours') % 24, 2);
}

function getRemainingDays(nowDayJS,timestampDayJS) {
    return timestampDayJS.diff(nowDayJS, 'days');
}

function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if (numberString.length >= minLength)
        return numberString
    else
        return "0".repeat(minLength - numberString.length) + numberString;
}