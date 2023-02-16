import { useState } from "react"

export function Stopwatch({timer} : {timer: number}){
    const [timeRunning, setTimeRunning] = useState(0);
    // const [time, setTime] = useState('')

    var Time = "00:00:00:00";

    if(timer){
        // .toFixed(0)

        // mili = 1000; seg = 60; min = 60; h
        var verifSeconds = Number((timer/1000).toFixed(0))
        var Milliseconds : string | number = timer - verifSeconds * 1000;

        var verifMinuts = Number((verifSeconds/60).toFixed(0))
        var Seconds : string | number = verifSeconds - verifMinuts * 60;

        var Hours : string | number = Number((verifMinuts/60).toFixed(0))
        var Minuts : string | number = verifMinuts - Hours * 60;

        if(Milliseconds.toString().length == 1){
            Milliseconds = '0' + Milliseconds
        }
        if(Seconds.toString().length == 1){
            Seconds = '0' + Seconds
        }
        if(Minuts.toString().length == 1){
            Minuts = '0' + Minuts
        }
        if(Hours.toString().length == 1){
            Hours = '0' + Hours
        }

        Time = `${Hours}:${Minuts}:${Seconds}:${Milliseconds}`
        // setTimeout(() => {
        // }, timer)
    }else{

    }
    return(
        <div className="stopwatch">
            {Time}
        </div>
    )
}