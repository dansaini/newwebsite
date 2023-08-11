import React from "react";

const Mapping = () =>{
let studentdata =[
    {name:"deepak", age:"30", Degree:"BCA" },
    {name:"Brij", age:"35", Degree:"B.com" },
    {name:"Nick sir", age:"33", Degree:"MBA" },
    {name:"deepak", age:"30", Degree:"BCA" },
    {name:"Brij", age:"35", Degree:"B.com" },
    {name:"Nick", age:"33", Degree:"MBA" },
 ]
    return(
        <>
            <div className="box">
                <h1>Mapping</h1>
                <div className="column">
                    <div className="common-b">
                    <strong>Mapping</strong>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Degree</th>
                            </tr>
                            {studentdata.map((curval) => {
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

export default Mapping;