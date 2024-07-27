import React from 'react'
import Card from './components/card.jsx'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  return (
    <>
    <Card username='Rajan' password='Password hala ta'/>
    <div className="mt-5">
    <Card username='Tinku' password={'tinku hala ta password'}/>
    <Card/>
    </div></>
  )
}
export default App
