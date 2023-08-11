import React, { useState } from "react";

const Reactjsx = () => {
    let newTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(newTime);

    const getTime = () =>{
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    }
    setInterval(getTime, 1000)

    var curtime = new Date().toLocaleString();
    var curyear = new Date().getFullYear();
    return(
        <>
            <div className="box">
                <div className="column">
                    <div className="common-b">
                        <strong>Local System Time </strong>
                        <p>{curtime}</p>

                        <div className="counter">
                            <h1>{time}</h1>
                        </div>
                    </div>
                    <div className="common-b">
                        <strong>Current Year </strong>
                        <p>{curyear}</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Reactjsx;