import React from "react";

const Todomapping = (props) => {
    return (
        <>
             <li key={props.indexval}>{props.text} <div onClick={()=>props.selected(props.indexval)} className="deletelist">X</div></li>
        </>
    )
}

export default Todomapping;