import React,{useState} from 'react'
import './App.css'

function App() {
  function handelclick(e){
    e.preventDefault()
    fetch(`http://api.weatherapi.com/v1/current.json?key=b1dd851efecd4fd8a0090138242003&q=${city}`).then
    ((res)=>res.json()).then
    ((data)=>{ console.log(data),
    SetTemp(data.current.temp_c)}  
  )
    .catch((error)=>{
      console.log("error",error)
    });
  }

const [city,Setcity]=useState('')
const [temp,SetTemp]=useState('eta aux weather bebs')
const apikey = 'b1dd851efecd4fd8a0090138242003'
  return (
    <>
    <div className='grid place-content-center gap-2'>
      <input type="text" value={city} onChange={(e)=>{ Setcity(e.target.value) }} className='bg-gray-400' />
      <button className='bg-blue-500 hover:bg-blue-600 rounded-md px-2 mx-10' onClick={(e)=>{
        handelclick(e)
      }}>Fetch info</button>
      <div>{temp}</div>
      </div>
    </>
  )
}
export default App
