import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import About from './components/about'
import Navbar from './components/Navbar'

function App() {
  return (
  <BrowserRouter>
  <h1>header hu meh</h1>
  <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='login/' element={<Login/>}></Route>
      <Route path='about/' element={<About/>}></Route>
      <Route path='navbar/' element={<Navbar/>}></Route>
  </Routes>
  <h1>footer hu meh betwa</h1>
  </BrowserRouter>
  )
}
export default App
