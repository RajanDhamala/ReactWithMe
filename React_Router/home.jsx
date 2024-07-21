import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
    <div>oii hooiii bado baadi badadi
        <Link to="/about">About us</Link>
        <Link to="/login">login</Link>
        <Link to="/navbar">navbar</Link>
    </div> )
}

export default Home
