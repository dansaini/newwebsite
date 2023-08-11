import React, { useState } from "react";
import Sortform from "../service/Sortform"

const Contactus = () =>{


    return(
        <>
            <div className="box">
                <h1>Contact us</h1>
                <div className="column">
                    <div className="common-b">
                        <Sortform title = "Contact form" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus;