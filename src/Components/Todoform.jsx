import React, { useState } from "react";
import {useTodo} from '../Contexts/TodoContext'

function TodoForm() {

const [todo,setTodo]=useState('')
const addToodo=useTodo

const add=(e)=>{
    e.preventDefault()

    if(!todo) return

    addToodo({todo,completed:false})
    setTodo('')
}

    return (
        <form onSubmit={add}  className="flex">
            <input
            onChange={(e)=>setTodo(e.target.value)}
                value={todo}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={(e)=>e.preventDefault()}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;