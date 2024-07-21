import React from "react";
import { Link } from "react-router-dom";
import Home from "./home";
import Login from "./login";

function Navbar (){
return(
    <div>
        <nav>
            <Link to="/home"><ul>Home</ul></Link>
            <Link to="/about"><ul>about</ul></Link>
            <Link to="/login"><ul>Login</ul></Link>
        </nav>
    </div>
)
}
export default Navbar
