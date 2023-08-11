import React from "react";

const Reactjsx = () => {
    var Fname = "Deepak";
    var Lname = "Saini";
    return(
        <>
        <div className="box">
            <h1>Template litreals</h1>
            <div className="column">
            <div className="common-b">
                <strong>Use of Template litreals </strong>
                <p>{`My name is ${Fname} ${Lname}`}</p>
            </div>
            </div>
           
        </div>
        </>
    );
}

export default Reactjsx;