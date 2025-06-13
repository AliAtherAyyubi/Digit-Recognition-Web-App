// import { useState } from 'react'

import './App.css'
import CanvasDraw from './components/draw'
import Upload from './components/upload'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='heading'>Handwritten Digit Recognition Model</h1>
      {/* <Upload /> */}
      <CanvasDraw/>
    </>
  )
}

export default App
