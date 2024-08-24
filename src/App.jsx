import { useState } from 'react'
import './App.css'
import { Todoprovider } from './Contexts/TodoContext'
import TodoForm from './Components/Todoform'


function App() {
  const [todos,setTodos]=useState['']

  const addTodo=(todo)=>{
    setTodos((prevtodo)=>[{id:Date.now(),...todo},...prevtodo ])
  }

  const updatedTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id === id? todo :prevtodo)))
  }

  const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((todo)=>todo.id !==id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo ==id ? {...prevTodo,completed:!prevTodo.completed} :prevTodo))
  }
  return (
    <>
    <Todoprovider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        
                    </div>
                </div>
            </div>
            </Todoprovider>
    </>
  )
}

export default App
