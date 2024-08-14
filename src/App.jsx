import { useState } from "react"

function App() {
 let [color,setColor]=useState("olive")

  return (
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center b-12 inset-x-0 px-2 bottom-12">
          <div className=" flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded-3xl">
            <button className="outline-none px-4 rounded-full py-1 text-white" style={{backgroundColor:"red"}} onClick={()=>{ setColor("red")}}>red</button>
            <button className="outline-none px-4 rounded-full py-1 text-white" style={{backgroundColor:"green"}} onClick={()=>{ setColor("green")}}>green</button>
            <button className="outline-none px-4 rounded-full py-1 text-white" style={{backgroundColor:"orange"}} onClick={()=>{ setColor("orange")}}>orange</button>
            <button className="outline-none px-4 rounded-full py-1 text-white" style={{backgroundColor:"purple"}} onClick={()=>{ setColor("purple")}}>purple</button>
            <button className="outline-none px-4 rounded-full py-1 text-white" style={{backgroundColor:"black"}} onClick={()=>{ setColor("black")}}>black</button>
            <button className="outline-none px-4 rounded-full py-1 text-white" style={{backgroundColor:"blue"}} onClick={()=>{ setColor("blue")}}>blue</button>
          </div>
          </div>
      </div>
  )
}

export default App
