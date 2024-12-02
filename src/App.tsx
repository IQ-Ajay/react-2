import { useState } from 'react'
import './App.css'
import MainComponent from './components/MainComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainComponent></MainComponent>
      <h1>Nest</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count of click is : {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
