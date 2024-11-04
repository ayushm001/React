import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength ] = useState(5);
  const [numberAllowed, setNumberAllowed]= useState(false);
  const[charAllowed, setcharAllowed] = useState(false);
  const[password, setPassword ]= useState(" ")

  //  useRef HOOK
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1 )

      pass += str.charAt(char)
      
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select()
    
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator( )
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-1 py-3 my-8
     bg-gray-800 text-orange-500'>

      <h1 className='text-white text-center my-10 '> Password Generator </h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text"
          value = {password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />

        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' 
        onClick={copyPasswordToClipboard}>
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
           <label htmlFor="charecter input"> Charecters </label>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
