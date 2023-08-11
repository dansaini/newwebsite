import React from "react";
import ServiceData from "../service/ServiceData";
import ImageSlider from "./ImageSlider "

const Home = () =>{
    return(
        <>
           <ImageSlider />
           <div className="service">
           <div className="box">
                    <h1>Services</h1>
                   <ServiceData />
                </div>
          </div>
        </>
    )
}

export default Home;