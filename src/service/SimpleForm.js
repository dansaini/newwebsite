import React, { useState } from "react";

const Simpleform = () =>{
const [name, setName] = useState("");
const [fname, setFname] = useState();
const [lname, setLname] = useState("");
const [flname, setFlname] = useState();

const getname = (e)=>{
    setName(e.target.value)
}
const getLname = (e)=>{
    setLname(e.target.value)
}

const submit = () =>{
    setFname(name);
    setFlname(lname);
    setName("");
    setLname("");
}

    return(
        <>
        <h1>Simple Form </h1>
        <strong>First name = {fname} <br /> Last Name = {flname}</strong>
        <input type="text" className="input" placeholder="Enter first name" onChange={getname} value={name} name=""/>
        <input type="text" className="input" placeholder="Enter Last name" onChange={getLname} value={lname} name=""/>
        <button className="btn" onClick={submit}>Submit</button>
            
        </>
    )
}

export default Simpleform;