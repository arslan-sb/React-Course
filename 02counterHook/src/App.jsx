import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setCounter ]= useState(0);

  const increment =()=>{
    counter=counter+1
    setCounter(counter);
    console.log(counter);
  }



  return (
    <>
    <h1>Counter App</h1>
    <h3>Value {counter}</h3>

    <button onClick={increment}>Increment</button>
    <button onClick={()=> setCounter(()=>counter-1)}>Decrement</button>
    </>

  )
}

export default App
