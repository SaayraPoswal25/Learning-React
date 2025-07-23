import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('white');
  const arr = ["white", "red", "pink", "blue", "green", "yellow", "orange", "purple", "brown", "gray"];


  return (
    <>
      <div style={{ backgroundColor: color }} className='main'>
      </div>
      <div className='bar'>
          {arr.map((item, index) => (
            <button
              key={index}
              style={{ backgroundColor: item }}
              onClick={() => setColor(item)}
            >
              {item}
            </button>
          ))}
        </div>
    </>
  )
}

export default App
