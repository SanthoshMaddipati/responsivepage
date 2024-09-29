import React, { useState } from "react";
import "./Navbar.scss"
function Navbar(){
    const [open,setOpen] = useState(false)
    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/Logo1.png" alt="" />
                    <span>RealEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>

            </div>
            <div className="right">
            <a href="/" >Login</a>
            <a href="/" className="register">Sign up</a>
            <div className="menuIcon">
               <img src="/menu.png" alt=""  
               onClick={()=>setOpen((prev)=>(!prev))}/> 
            </div>
            <div className={open ?"menu active":"menu"}>
            <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
                <a href="/">Login </a>
                <a href="/">Sign up</a>
            </div>
            </div>
        </nav>
        
       
    )
}

export default Navbar;