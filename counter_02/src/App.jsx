import { useState } from 'react'         // hook calling
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Hook's uses

  const [dIsply_value , setCounter] = useState(10)

  //let dIsply_value = 10  this variable is never gonna be reflect in UI section , it only reflect in backend (console) section 

  const addVALUE = ()=>{
    // console.log('clicked', dIsply_value);
    // dIsply_value = dIsply_value + 1

    if (dIsply_value < 20) {
      setCounter(dIsply_value + 1)       // useing loop to set it from 0 - 20
    }
  
  }


  const removeVALUE = ()=> {

    if (dIsply_value > 0) {
      setCounter(dIsply_value - 1)      // useing loop to set it from 0 - 20
    }
  
  }


  return (
    <>
     
     <h1> React </h1>
     <h2> Check Counter value {dIsply_value}</h2>
     <button onClick={addVALUE}> Add Valu  {dIsply_value}</button>
     <br />
     <button onClick={removeVALUE}> Remove Value  {dIsply_value} </button>
    </>
  )
}

export default App
