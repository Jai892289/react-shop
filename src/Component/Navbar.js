import React from 'react';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
import header_logo from "../Image/header_logo.png";
import search from "../Image/search-interface-symbol.png"
import love from "../Image/love.png"
import location from "../Image/location.png"
import checkout from "../Image/checkout.png"


const Navbar = () => {
  const {cartTotalQuantity}= useSelector(state => state.cart)
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">                <img src={header_logo} className="w-100" style={{ height: "50px" }} alt="imagenew" />
</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li> */}

            
            </ul>
            
       <div className="cart-icon">

       <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="35" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
       <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
     </svg><div className="cart-quantity">
<span>{cartTotalQuantity}</span>
</div>
     <img src={search} className="w-1000" style={{ height: "18px", width:"22px" }} alt="imagenew" />
     <img src={love} className="w-1000" style={{ height: "18px", width:"22px" }} alt="imagenew" />
     <img src={location} className="w-1000" style={{ height: "18px", width:"22px" }} alt="imagenew" />
     <img src={checkout} className="w-1000" style={{ height: "18px", width:"22px" }} alt="imagenew" />

         
        </div> 



          </div>
        </div>
      </nav>  
        </div>
    )
}

export default Navbar
