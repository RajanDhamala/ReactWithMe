import React,{useCallback,useEffect,useState} from "react"

function App1() {

  const [char,Setchar]=useState(false)
  const [number,Setnumber]=useState(false)
  const [input,Setinput]=useState('')
  const [length,Setlength]=useState('')

  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let pass="";
  if(char)str+='/.,!@#$$%^&*()_+":{}?><'
  if(number)str+='1234567890'

  useEffect( ()=>{
    Randompswd()
    Setinput(pass)
  },[char,number,length])

  function Randompswd(){
  for (let i = 0; i <length; i++){
    let no=Math.floor(Math.random()*str.length)
    pass+=str[no] 
  }return pass
  }
  function handelclick(e){
    e.preventDefault()
    Randompswd()
    Setinput(pass)
  }

  return (
    <>
    <div className="grid grid-cols-2 mt-5">
      <div className=" flex justify-center"> 
      <input type="text" className="focus:outline-none bg-gray-400 text-black font-semibold px-3 py-1 rounded-md " value={input} onChange={(e)=>{Setinput(e.target.value)}} readOnly /></div>
      <div className="flex space-x-2 items-center">
      <label>Char</label>
      <input type="checkbox" defaultChecked={char} onChange={(e)=>{Setchar((prevbox)=>!prevbox)}}/>
      <label>Numb</label>
      <input type="checkbox" defaultChecked={number} onChange={(e)=>Setnumber((prevno)=>!prevno)}/></div>
      <div className="flex justify-center">
      <input type="range"  min={6} value={length} max={20} className="" onChange={(e)=>{Setlength(e.target.value)
      }} /></div>
      <div className="flex justify-center"><button className="bg-blue-500 hover:bg-blue-600 text-white rounded mt-3 mx-4 px-2 py-1" onClick={(e)=>{
        handelclick(e)
      }}>Get Passwd</button></div>
    </div>
    </>
  )
}
export default App1
