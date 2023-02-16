import { useEffect, useState } from "react";

export function Stopwatch({ timer }: { timer: string | null }) {
//   const [timeRunning, setTimeRunning] = useState(timer);
    // console.log(timer);

  var Time = "00:00:00:00";

//   if (timeRunning) {
    // console.log(timeRunning);
    // .toFixed(0)

    // mili = 1000; seg = 60; min = 60; h
    

    //     setTimeout(() => {
    //       setTimeRunning(timeRunning - 1);
    //     }, 1);
//   }

  return <div className="stopwatch">{timer}</div>;
}
