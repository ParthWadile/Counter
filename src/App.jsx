import { useState } from 'react'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="parent">
    <h1 className='h1'>Current Value:{count}</h1>
      <User/>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    </>
  )
}

export default App
