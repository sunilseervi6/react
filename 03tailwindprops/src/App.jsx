import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    user:"sunil",
    age:21

  }

  return (
    <>
       <h1 className='bg-green-400 p-4 rounded-xl mb-4' >Tailwind Test</h1>
       <Card username="SUNIL" someObj= {myObj}/>
       <Card />
        
        
        
    </>
  )
}

export default App
// passing values from one component to another = props
