import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HandleState from './stateManage'
import User from './User'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <HandleState></HandleState>
      <User></User>
      <Friends></Friends>
    </>
  )
}

export default App
