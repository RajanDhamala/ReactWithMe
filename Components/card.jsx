import React, { useState } from'react'

function Card({username='username',password,show}){
    const [inputvalue,Setvalue]=useState('')
    const [inputpasswd,Setpasswd]=useState('')


    function verifygarnus(email,inputpasswd){
        if (inputpasswd.length >=8){
            alert(`login successfull ${show}`)
            Setvalue("")
            Setpasswd("")
        }else{
            alert("password lamo haal mula")
        }
    }
    function handleclick(){
        verifygarnus(inputvalue,inputpasswd)
    }
    return(
        <>
        <h1 className='text-center mt-5'>Login or SignUp</h1>
        <div className='flex justify-center mt-2 w-full'>
        <div className='grid grid-rows-2 gap-3 border-2 px-3 py-2 '>
            <label>For {username}</label>
            <input type="text" className='bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-3 try' value={inputvalue} onChange={(e)=>{
                Setvalue(e.target.value)
            }}/>
            <label>Urs {password}</label>
            <input type="password" className='bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-3' value={inputpasswd} onChange={(e)=>{
                Setpasswd(e.target.value)
            }}/>
            <button className='bg-blue-500 hover:bg-blue-600 rounded-md px-2 py-1 text-white' onClick={handleclick
            }>Submit</button>   
        </div>
        </div>
        </>
    )
}
export default Card 
