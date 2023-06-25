 import { useEffect, useState } from "react";
import { LOGO_URL } from "../utlis/constants";
import {Link} from "react-router-dom"
 const Header=()=>{
  const[btnText,setBtnText] = useState("login")
   console.log("BTN button called")
   useEffect(()=>{
    console.log("UseEffect in header called")
   },[])
    return (
      <div className="header">
       <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div> 
      <div className="nav-items">
        <ul>
          <li>  <Link to="/"> Home</Link></li>
          <li> <Link to="/about"> About Us</Link></li>
          <li> <Link to="/contact"> Contact Us</Link></li>
          <li> Cart</li>
          <button
              className="login"
              onClick={()=>{
                btnText==="login"
                ? setBtnText("Logout")
                :setBtnText("login")
              }}
        >{btnText}</button>
        </ul>

      </div>
      </div>
     )
  }
  export default Header;