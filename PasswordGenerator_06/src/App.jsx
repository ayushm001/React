import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength ] = useState(5);
  const [numberAllowed, setNumberAllowed]= useState(false);
  const[charAllowed, setcharAllowed] = useState(false);
  const[password, setPassword ]= useState(" ")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8
     bg-gray-800 text-orange-500'>

      <h1 className='text-white text-center my-10 '> Password Generator </h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text"
          // value{Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
        />

        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>
          Copy
        </button>

      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='felx items-center gap-x-1'>
          <input type="range"
          min={5}
          max={30} 
          value={length}
          className='cursor-pointer'
          onChange={ (e) => {setLength(e.target.value)}}
          />

          <label > Length: {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='NumberInput'
          onChange={() => {setNumberAllowed( (prev) => !prev);
          }}
           />
        </div>
      </div>

    </div>
    </>
  )
}

export default App
