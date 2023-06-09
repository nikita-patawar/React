 import { useEffect, useState } from "react";
import { LOGO_URL } from "../utlis/constants";
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
          <li> Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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