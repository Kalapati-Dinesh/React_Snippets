import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import { About } from './About';
import Contact from './Contact';
import './App.css'

function App() {
  return(
    <>
    <h1>Hello World!</h1>
    <Home></Home>
    <About></About>
    <Contact></Contact>
    </>
  )
}

export default App
