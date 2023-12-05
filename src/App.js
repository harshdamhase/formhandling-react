import React from 'react'
import './App.css'
import Test from './Test'

function App({name}) {
  return (
    <div>
      <h1 className='name'>my name is {name}...</h1>
     <h2>yellow</h2>

<Test />
      </div>
  )
}

export default App