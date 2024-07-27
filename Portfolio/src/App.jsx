import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import {Toaster} from "react-hot-toast"
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Toaster/>
    <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
