import React from "react";

const SpreadOperator = () =>{
    let studentdata =[
        {name:"deepak", age:"30", Degree:"BCA" },
        {name:"Brij", age:"35", Degree:"B.com" },
        {name:"Nick sir", age:"33", Degree:"MBA" },
     ]
     let allteam = [
       ...studentdata,
       {name : "Domnic sir", age : "42", Degree : "MCA"},
       {name : "Tristan", age : "35", Degree : "MCA"},
       {name : "Vipan", age : "35", Degree : "B-Tech"},
     ]
    return(
        <>
            <div className="box">
                <h1>Spread Operator with Mapping</h1>
                <div className="column">
                    <div className="common-b">
                    <strong>Spread Operator with Mapping</strong>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Degree</th>
                            </tr>
                            {allteam.map((curval) => {
                                let { name, age, Degree } = curval;
                                return (
                                    <>
                                        <tr>
                                            <td>{name}</td>
                                            <td>{age}</td>
                                            <td>{Degree}</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpreadOperator;