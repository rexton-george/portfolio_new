import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Navbar from './componets/Common/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'



function App() {

  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path='/Skills' element = {<Skills/>}/>
        <Route path='/About' element = {<About/>}/>
        <Route path='/Projects' element = {<Projects/>}/>
        <Route path='/Contact' element = {<Contact/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
