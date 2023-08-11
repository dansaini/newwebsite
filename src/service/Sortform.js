import React, { useState } from "react";

const Sortform = (props) =>{
const [check, setCheck] = useState(1);
const [getname, setGetname] = useState([]);
const [name, setName] = useState({
    fname : "",
    lname : "",
    phone : "",
});

const getval = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    
    setName((propd)=>{
        return{
            ...propd,
            [name] : value,
        }
    })
}

const submit = (event) =>{
    event.preventDefault();
    setCheck(0)
    if(name.fname !== "" && name.lname !== "" && name.phone !== ""){            
    setGetname([...getname, name])
    setCheck(1)
    }
    }

    return(
        <>
        <h1>{props.title}</h1>
        <form onSubmit={submit}>
        <input type="text" className="input" placeholder="Enter first name" onChange={getval} value={name.fname} name="fname"/>
        {name.fname === "" & check === 0 ? <div className="error">Please Enter the name</div> : ""}
        <input type="text" className="input" placeholder="Enter Last name" onChange={getval} value={name.lname} name="lname"/>
        {name.lname === "" & check === 0 ? <div className="error">Please Enter the last name</div> : ""}
        <input type="text" className="input" placeholder="Enter Last Phone no" onChange={getval} value={name.phone} name="phone"/>
        {name.phone === "" & check === 0 ? <div className="error">Please Enter the phone</div> : ""}
        <button className="btn" type="submit" >Submit</button>
        </form>
        <table className="sortform">
        <tbody>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            {getname.map((curvalue, curindex)=>{
                let {fname,lname,phone} = curvalue
                return(
                    <>
                    <tr>
                        <td>{fname}</td>
                        <td>{lname}</td>
                        <td>{phone}</td>
                    </tr>
                    </>
                )
            })}
            </tbody>
        </table>
        </>
    )
}

export default Sortform;