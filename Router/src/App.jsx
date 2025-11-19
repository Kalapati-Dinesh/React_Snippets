import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <h1 id='app_heading'>WELCOME TO REACT ROUTER</h1>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/about" element = {<About />}></Route>
        <Route path = "/contact" element = {<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
