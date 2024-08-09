import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Comps//About'
import Contact from './Comps/Contact'
import Random from './Comps/random'
import Home from './Comps/Home'
import Header from './Comps/header'
import Footer from './Comps/footer'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/random" element={<Random/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
