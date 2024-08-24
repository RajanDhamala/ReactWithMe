import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoForm from './Components/Todoform.jsx'
import TodoItem from './Components/TodoItem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoItem/>
  </StrictMode>,
)
