import React, { useState } from "react";

const Simpleform = () =>{
const [getname, setGetname] = useState("");
const [name, setName] = useState({
    fname : "",
    lname : "",
    phone : "",
});

const getval = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    
    setName((oldval)=>{
       if (name === "fname"){
        return {
            fname : value,
            lname : oldval.lname,
            phone : oldval.phone,
        }
       }else if (name === "lname"){
        return {
            fname : oldval.fname,
            lname : value,
            phone : oldval.phone,
        }
       }else if (name === "phone"){
        return {
            fname : oldval.fname,
            lname : oldval.lname,
            phone : value,
        }
       }
    })

}


const submit = (event) =>{
    event.preventDefault();
    setGetname(name);
    setName({
        fname : "",
        lname : "",
        phone : "",
    });
}

    return(
        <>
        <h1>Object Form </h1>
        <strong>First name ={getname.fname}  <br /> Last Name ={getname.lname}  <br /> Phone No ={getname.phone} </strong>
        <form onSubmit={submit}>
        <input type="text" className="input" placeholder="Enter first name" onChange={getval} value={name.fname} name="fname"/>
        <input type="text" className="input" placeholder="Enter Last name" onChange={getval} value={name.lname} name="lname"/>
        <input type="text" className="input" placeholder="Enter Last Phone no" onChange={getval} value={name.phone} name="phone"/>
        <button className="btn" type="submit" >Submit</button>
        </form>
        </>
    )
}

export default Simpleform;