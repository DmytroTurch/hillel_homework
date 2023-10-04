import { useState } from 'react'
import {Input} from './components/Input/Input'
import {Button} from './components/Button/Button'
import { Counter } from './components/Counter/Counter'
import './App.css'

function App() {


  function aplly() {
    
  }

  return (
    <>
    <div>
      <Input
        desc={'min'}
      />

      <Input 
        desc={'max'}
      />
    </div>


      <Counter 
        min={Number(window.localStorage.getItem('min'))}
        max={Number(window.localStorage.getItem('max'))}
        currentValue={Number(window.localStorage.getItem('counter'))}/>
    </>
  )
}

export default App
