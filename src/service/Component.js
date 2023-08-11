import React from "react";

const Simplec = (props) =>{
    return(
        <>
            <div className="col">
                <h2>{props.title}</h2>
                <img src={props.imgsrc} alt=""/>
            </div>
        </>
    )
}


const Component = (props) =>{
    return(
        <>
            <div className="box">
            <h1>Simple Component</h1>
            <div className="column">
                <Simplec title={props.title} imgsrc="https://img.freepik.com/free-photo/assortment-bath-concept-with-soap-towel-box_23-2148295990.jpg" />
            </div>
           
        </div>
        </>
    )
}

export default Component;