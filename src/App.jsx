import { useState } from 'react'
import {Input} from './components/Input/Input'
import {Button} from './components/Button/Button'
import './App.css'

function App() {
  const [input, setInput] = useState('')

  function handleChange(e) {
      setInput(e.target.value);
  }

  function shout() {
    alert(input);
  }

  return (
    <>
      <Input
        handler={handleChange}
        value={input}
      />

      <Button handleClick={shout}>Shout IT!</Button>
    </>
  )
}

export default App
