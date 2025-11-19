import { useState } from 'react'
import Home from './Home'
import Contact from './Contact'
import './App.css'

function App() {
  const name = "Dinesh";
  const age = 22;
  return (
    <>
      <h1>Welcome</h1>
      <Home n = {name} a = {age}/>
      <Contact n = {name}/>
    </>
  )
}

export default App
