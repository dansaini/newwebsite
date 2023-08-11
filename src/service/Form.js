import React, { useState } from "react";
import Simpleform from "../service/SimpleForm"
import Objectform from "../service/Objectform"
import Sortform from "../service/Sortform"

const From = () =>{


    return(
        <>
            <div className="box">
                <h1>React Form</h1>
                <div className="column">
                    <div className="common-b">
                        <Simpleform />
                    </div>
                    <div className="common-b">
                        <Objectform />
                    </div>
                    <div className="common-b">
                        <Sortform title="Sort Form without condition" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default From;