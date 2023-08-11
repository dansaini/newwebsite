import React from "react";

const Destructuring = () =>{
let Days =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let [s1, s2, s3, s4, s5, s6, s7 ] = Days;

let Daysinfo = {
    daysname : "Sunday",
    totoalday : "seven"
}
let {daysname, totoalday} = Daysinfo;

    return(
        <>
        <div className="box">
            <h1>Array & Oject Destructuring</h1>
            <div className="column">
            <div className="common-b">
               <strong>Array Destructuring</strong>
               <p>Today day is {s2}</p>
            </div>
            <div className="common-b">
               <strong>Object Destructuring</strong>
               <p>Today day is {daysname}</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default Destructuring;