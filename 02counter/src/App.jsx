import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
 
  const add = () => {
    if(counter<20){
      setCounter(counter+1);
    } 

  }
  const sub = ()=>{
    if(counter>0){
      setCounter(counter-1);
    }

  }
 
  return (
    <>
    <h1>Chai aur react</h1>
    <h3>Counter value : {counter}</h3>

    <button onClick={add}>Add Value {counter}</button>
    <br />
    <button onClick={sub}>Sub Value {counter}</button>
       
    </>
  )
}

export default App
