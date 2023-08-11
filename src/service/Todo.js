import React, { useEffect, useState } from "react";
import Todomapping from "./Todomapping";

const getLocalItem = () =>{
    let List = localStorage.getItem('list');
    console.log(List);

    if (List) {
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return [];
    }
}


const Todo = () =>{
const [check, setCheck] = useState(1);
const [listadd, setListadd] = useState(getLocalItem());
const [list, setList] = useState("");

const getList = (event) =>{
    setList(event.target.value)
}

const addList = () =>{
    setCheck(0)
    if(list !== ""){
    setListadd((oldlist)=>{
        return([...oldlist, list] )
    })
    setCheck(1)
    }
    setList("")
}

useEffect (()=>{
    localStorage.setItem('list', JSON.stringify(listadd));
}, [listadd])

const deleteditem = (id) =>{
    setListadd((oldval)=>{
        return oldval.filter((curarr, index)=>{
            return index !== id;
        })
    })
}


    return(
        <>
            <div className="box">
                <h1>To Do List</h1>
                <div className="column">
                    <div className="common-b">
                    <strong>Enter Value = {list}</strong><br/>
                    <strong>Submit List = {listadd}</strong>
                        <input type="text" placeholder="Enter the To Do List" name="list" value={list} onChange={getList} className="input" />
                        {list === "" && check === 0 ? <div className="error">Please Enter To DO list</div> : ""} 
                        <button className="btn" onClick={addList}>Add List</button> 
                        <ul className="todolist">
                            {listadd.map((curval, index) => {
                                return (
                                   <Todomapping text={curval} indexval={index} selected={deleteditem} />
                                )
                            })}
                        </ul>   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;