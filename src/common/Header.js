import React from "react";
import { Link } from "react-router-dom"
const Header = () =>{
    return(
        <>
           <div className="header">
                <div className="logo"><Link to="/"><img src="/newwebsite/images/mdg_newlogo.png" alt=""/></Link></div>
                <div className="navigation">
                    <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/service">Service</Link></li>
                     <li><Link to="/contactUs">Contact us</Link></li>
                     <li><Link to="/Faq">Faq</Link></li>
                    </ul>
                </div>
           </div>
           
        </>
    )
}

export default Header;
