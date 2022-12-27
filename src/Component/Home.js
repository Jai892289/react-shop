import React from 'react';
import Services from "./Services";

import cloths from "../Image/cloths.webp"
import banner from "../Image/banner.webp"
import Data from './Data';
import Categories from './Categories';

const Home = () => {
    return (

        <div>

    <div class="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div class="row">
            <div class="col-md-6" style={{padding:"20px 0px"}}>
            <h1>We are here to provide all services.</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                </p>
                <input style={{width:"100%", borderRadius:"20PX", border:"1PX solid grey", padding:"10px" }} type="text" placeholder="Search.." name="search" /> 
            </div>
            <div class="col-md-6">
                
                <img src={cloths} className="w-100" style={{ height: "300px" }} alt="imagenew" />

            </div>
        </div>
        </div>

        
        

   <Categories />        

<Services />
<div>             
       <img src={banner} className="w-100" style={{ height: "300px" }} alt="imagenew" />
</div>
<Data />

        </div>
    )
};

export default Home;





