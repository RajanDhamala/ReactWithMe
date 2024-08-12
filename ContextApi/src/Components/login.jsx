import React,{useContext,useState} from 'react'
import UserContext from '../Context/UserContext'

function login() {

    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')

    const {setUser}=useContext(UserContext)

    function handelsubmit(e){
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" className='bg-red-300 placeholder:username' value={username} onChange={(e)=>setusername(e.target.value)}/>
        <input type="password"  className='bg-red-300 placeholder:password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={handelsubmit} className='rounded-md bg-blue-500 hover:bg-blue-600 text-white text-lg'>Submit</button>
    </div>
  )
}

export default login