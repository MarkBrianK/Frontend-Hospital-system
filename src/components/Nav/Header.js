import React from "react";
import home from "./images/house.svg"
import chat from "./images/chat-left.svg"


function Header (){
    return(
        <div>
             <nav id="nav" className="navbar navbar-light">
    <div className="container-fluid">
    <div>
        <a href="/">
        <img src={home}  alt="home icon" />
        </a>
    </div>
    <div>
    <a href="mailto:ngilaian@gmail.com">
        <img src={chat}  alt="home icon" />
        </a>
    </div>
    </div>
    </nav>
        </div>
    )
}
export default Header
