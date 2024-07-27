import React from'react'
function Card({username='username',password}){
    return(
        <>
        <h1 className='text-center mt-5'>Login or SignUp</h1>
        <div className='flex justify-center mt-2 w-full'>
        <div className='grid grid-rows-2 gap-3 border-2 px-3 py-2 '>
            <label>For {username}</label>
            <input type="text" className='bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-3'/>
            <label>Urs {password}</label>
            <input type="password" className='bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-3' />
            <button className='bg-blue-500 hover:bg-blue-600 rounded-md px-2 py-1 text-white'>Submit</button>   
        </div>
        </div>
        </>
    )
}
export default Card 
