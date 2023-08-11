import React, { useState } from "react";
import Watchnew from "../service/Watchnew"


const Hooks = () =>{

// incr and dec //
const [inc, setInc] = useState(1);
const Inc = () =>{
    setInc(inc + 1);
}
const Dec = () =>{
    if (inc === 0) {
        alert("Please click on th Increment button")
    }else {
    setInc(inc - 1);
    }
}

//onclick set time//
let localtime = new Date().toLocaleTimeString();
const [time, setTime] = useState();
 const getTime = () =>{
    let localtime = new Date().toLocaleTimeString();
    setTime(localtime);
 }


 const [toggle, setToggle] = useState(false);
 const toggleClass =() =>{
    setToggle(!toggle)
 }

    return(
        <>
            <div className="box">
                <h1>Usestate Hooks</h1>
                <div className="column">
                    <div className="common-b">
                        <strong>Usestate Use for Inc & Dec</strong>
                        <h1>{inc}</h1>
                        <div className="btn-row space-between">
                        <button className="btn" onClick={Inc}>Increment</button>
                        <button className="btn" onClick={Dec}>Decrement</button>
                        </div>
                    </div>
                    <div className="common-b">
                        <strong>Onclick set time by hooks</strong>
                        <h1>{localtime}</h1>
                        <div className="btn-row space-between">
                        <button className="btn" onClick={getTime}>Change Time</button>
                        </div>
                    </div>
                    <div className="common-b">
                        <strong>Watch</strong>
                        <Watchnew />
                    </div>

                    <div className={`common-b ${toggle ? "active" : ""}`}>
                        <strong>Toggle Class</strong>
                        <h1></h1>
                        <div className="btn-row space-between">
                            <button className="btn" onClick={toggleClass}>Change BG Color</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hooks;