import React, {useState} from "react";

const Watchnew = () => {
    let curtime = new Date().toLocaleTimeString();
    const [times, setTimes] = useState();
   const getTime = () => {
    let curtime = new Date().toLocaleTimeString();
    setTimes(curtime)
   }
   setInterval(getTime, 1000);

    return (
        <>
            <h1>{curtime}</h1>
        </>
    )
}
export default Watchnew;