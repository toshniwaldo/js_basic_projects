import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

const [count,setCount]=useState(0); // 0 is being set as count defaulat value , setCount is function provided by usestate hook to inc count valu e

function updatecounter(){
  setCount(count+1);
}

  return (
    <>
    <button onClick={updatecounter}>counter{count}</button>
    </>
  )
}

export default App
 
