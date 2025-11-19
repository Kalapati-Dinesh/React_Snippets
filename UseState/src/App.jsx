import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greet } from './Greet'
import Timer from './Timer'

function App() {
  let name = "React"
  return (
    <>
      <h1>Welcome Dinesh</h1>
      <Greet n = {name}/>
      <Timer />
    </>
  )
}

export default App
