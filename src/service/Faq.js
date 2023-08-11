import React, { useState } from "react";
import faqdata from "../service/Faqdata";

const Faq = () => {
    const [IsOpen, setIsOpen] = useState(0);
    const toggleSet = (id) => {
        if (IsOpen === id) {
            setIsOpen(null);
            return false;
        }
        setIsOpen(id)
    }

    return (
        <>
            <div className="box">
                <h1>Faq</h1>
                <div className="column">
                    <div className="common-b">
                        {faqdata.map((curval, index) => {
                            let { question, answer } = curval;
                            return (
                                <>
                                    <div className="accordion" id={index}>
                                        <div className="acc-tab" onClick={() => toggleSet(index)}>{question}<div className="acc-btn">{index === IsOpen ? "-" : "+"}</div></div>
                                        {index === IsOpen ? <div className="acc-content"> {answer}</div> : ""}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Faq;

