import React from "react";

function Freedelivery({link}){
    function handleClick(e){
        e.preventDefault()
        window.open(link,"_blank")
    }
    return(
       <button className="border-green-500 border rounded-md text-[12px] px-2 text-green-600 ml-2" 
       onClick={(e)=>{
        handleClick(e)
       }}
       >Free Delivery</button>
    )
}
export default Freedelivery
