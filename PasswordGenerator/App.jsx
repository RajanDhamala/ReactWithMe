import { useState,useCallback,useEffect } from 'react'

function App() {
const [length,setlength]=useState(10)
const [noAllowed,SetnoAllowed]=useState(false)
const [characterAllowed,SetcharacterAllowed]=useState(false)
const [Passowrd,setPassword]=useState()

const passwordGenerator=useCallback( ()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(noAllowed) str+='0123456789'
if (characterAllowed) str+="!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~"

for(let i=1;i<=length;i++){
  let char= Math.floor(Math.random()*str.length)
  pass+=str[char]

}setPassword(pass)

},[length,noAllowed,characterAllowed,setPassword])

useEffect( ()=>{passwordGenerator()},[length,noAllowed,characterAllowed,passwordGenerator])

return (
    <>
      <div className='w-auto max-w-md bg-gray-700 rounded-md mx-auto px-4 my-8 '>
        <h1 className=' text-center text-2xl font-bold text-red-500 pt-2 duration-200 '>Generate password</h1>
      <div className='flex justify-center mt-3 gap-2'>
        <input type="text"
        value={Passowrd}
        placeholders="password" 
        className='rounded w-full px-4 outline-none text-black ' 
        readOnly/>
        <button className='bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-md'>Copy</button>
      </div>
        <div className='flex flex-wrap mt-3 space-x-2'>
          <div className='space-x-2'>
          <input type="range"
           max={50} 
           min={10} 
           value={length}
           className='cursor-pointer' 
           onChange={(e)=>{
           setlength(e.target.value)
           }}
           />
           <label className='text-orange-500'>length:{length}</label>
          </div>
           <div className='space-x-2'>
            <input 
            type="checkbox"
            defaultChecked={noAllowed}
            id='Numberinput'
            onChange={()=>{
              SetnoAllowed((prevno)=>!prevno);
            }}
            />
            <label className='text-orange-500'>Number</label>
           </div>
           <div className='flex space-x-2'>
            <input type="checkbox"
            defaultChecked={characterAllowed}
            id='charInput'
            onChange={()=>{
              SetcharacterAllowed((prevchar)=>!prevchar)
            }}
             />
             <label htmlFor="" className='text-orange-500'>Characters</label>
           </div>
        </div>
      </div>
    </>
  )}
export default App
