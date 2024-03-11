import { useState } from 'react'
import './App.css'

function App() {

  const [test, setTest] = useState("hello world");

  return (
    <>
      <h1 className='test-class'>{test}</h1>
    </>
  )
}

export default App
