import React, { useState } from "react";
import Component from "./Component";

///======== If else========/////
let team = "designer"
const Defineteam = () =>{
    if(team === "designer"){
        return <Component title="Designer" />
    } else{
        return <Component title="Developer" />
    }
}
///======== If else========/////

///======== Ternary Operator========/////
let team2 = "designer"
const Defineteams2 = () =>{
    return(
        <>
    { team2 === "designer" ? <Component title="Ternery Designer" /> : <Component title="Ternery Developer" />}
    </>
    )
}
///======== Ternary Operator========/////

///======== Slot machin========/////



const SlotMachine = (props) =>{
    var {x,y,z} = props;
    if ((x === y && y === z)){
        return(
            <>
                <h1>{x} {y} {z}</h1>
                <h1>This is match</h1>
            </>
        )

    }else {
        return(
            <>
                <h1>{x} {y} {z}</h1>
                <h1>This is Not match</h1>
            </>
        )
    }
}


const Conditions = () => {
    const [val, setVal] = useState();
    const [sub, setSub] = useState();

    const getVal = (e) =>{
        setVal(e.target.value)
    }

    const submit = ()=>{
        setSub(val)
    }

    var curDate = new Date(2023,8,9,sub).getHours();
    var text = "Bye Bye Byeeeeeeee";
    if(curDate >= 1 && curDate < 12){
        text = "Good Morning"
    } else if (curDate >= 12 && curDate < 19){
        text = "Good Afternoon"
    } else {
        text = "Good Night"
    }

    


    return(
        <>
        <div className="box">
            <h1>Condition</h1>
            <div className="column">
            <div className="common-b">
            <strong>Only Enter numeric value (1 to 24)</strong>
            <input type="text" className="input" value={val} onChange={getVal} />
            <button type="button" onClick={submit}>Submit</button>
            <p>{text}</p>
            </div>
            <div className="common-b">
            <strong>If / Else</strong>
                <Defineteam />
            </div>
            <div className="common-b">
            <strong>Ternary Operator</strong>
                <Defineteams2 />
            </div>

            <div className="common-b">
            <strong>Slot Machin</strong>
                <SlotMachine x ="15" y = "15" z="15"/>
                <SlotMachine x ="15" y = "20" z="30" />
                <SlotMachine x ="15" y = "20" z="30"/>
            </div>
            </div>
           
        </div>
        </>
    );
}

export default Conditions;