import React from "react";
import home from "./images/house.svg"
import { Link } from "react-router-dom";
import {FaUserAlt} from 'react-icons/fa'
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
        <a href="mailto:ngilaian@gmail.com">
       <Link to='/signup'> <FaUserAlt/> </Link> 
        </a>
    </div>
    </div>
    </nav>
        </div>
    )
}
export default Header
