 import { useEffect, useState } from "react";
import { LOGO_URL } from "../utlis/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utlis/useOnlineStatus";
 const Header=()=>{
  const[btnText,setBtnText] = useState("login")
  //  console.log("BTN button called")
  //  useEffect(()=>{
  //   console.log("UseEffect in header called")
  //  },[])
  const onlineStatus = useOnlineStatus();
  console.log("status",onlineStatus)
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-200">
       <div className="logo-container">
        <img className="w-32" src={LOGO_URL}></img>
      </div> 
      <div className="nav-items flex items-center">
        <ul className="flex p-4">
          <li className="px-4">Online Status: {onlineStatus ? "online" : "offline"}</li>
          <li className="px-4">  <Link to="/"> Home</Link></li>
          <li className="px-4"> <Link to="/about"> About Us</Link></li>
          <li className="px-4"> <Link to="/contact"> Contact Us</Link></li>
          <li className="px-4"> <Link to="/grocery">Grocery</Link></li>
          <li className="px-4"> Cart</li>
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