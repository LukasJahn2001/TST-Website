import Countdown from "./Countdown";

const Foerderverein = () => {

    const countdownTimestampMs = 1725062400000;

    return (
        <div className={'abstandcontainer'}>
            <h1 className={'text-center'}>Deutsche Meisterschaft Faustball 2024 in Thiersheim</h1>
            <Countdown countdownTimestampMs={countdownTimestampMs}/>
        </div>
    );
}

export default Foerderverein
