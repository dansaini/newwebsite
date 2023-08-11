import React from "react";

const Reactjsx = () => {
    var Fname = "Deepak";
    var Lname = "Saini";
    return(
        <>
        <div className="box">
            <h1>React jsx</h1>
            <div className="column">
            <div className="common-b">
                <strong>Single value get from javascript variable </strong>
                <p>My Name is {Fname}</p>
            </div>
            <div className="common-b">
                <strong>Two value get from javascript variable </strong>
                <p>My Name is {Fname} {Lname}</p>
                <p>My Name is {Fname+ " " +Lname}</p>
            </div>
            </div>
           
        </div>
        </>
    );
}

export default Reactjsx;