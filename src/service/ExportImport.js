import React from "react";
import Fname, {Lname, add} from "./ExportImportdata";

const ExportImport = () =>{
    return(
    <>
        <div className="box">
            <h1>Export and import multiple variable and function</h1>
            <div className="column">
                <div className="common-b">
                    <p>{Fname} = (This is variable)</p>
                    <p>{Lname} = (This is variable)</p>
                    <p>{add(10, 5)} = (This is import function)</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default ExportImport;