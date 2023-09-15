import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "shahnawaz",
    age: 21,
  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <Card channel="YouTube and Code" someObj ={myObj} someObjTwo={myArr}/> */}

      <Card username="YouTube and code" btnText="Click Me"/>
      <Card username="shahnawaz"/>
      
    </>
  )
}

export default App
