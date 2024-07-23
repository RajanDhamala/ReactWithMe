import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(10)

  function addValue(){
  if(counter>=20){
    alert("cant procced above 20")
    setCounter(15)
  }
    else{console.log("count :",counter)
    setCounter(counter +1)}
  }
  function removeValue(){
    if (counter<=0){
      alert("click can't be less than zero")
      setCounter(15)}
  else{setCounter(counter -1)
  console.log("count :",counter)}
  }
  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value:{counter}</h2>
      
     <button onClick={addValue}>increase counter {counter}</button>
     <button onClick={removeValue}>decrease counter {counter}</button>

     <h2>{counter}</h2>
    </>
  )
}

export default App
