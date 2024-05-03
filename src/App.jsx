import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botcollection from './components/Botcollection'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
   <Botcollection />
     
    </>
  )
}

export default App