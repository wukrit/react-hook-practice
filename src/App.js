import React from 'react'
import './App.css'
import Counter from './Counter'
import PersistantCounter from './PersistantCounter'
// import Tilt from './Tilt'

function App() {
  return (
    <>
      <Counter />
      <br />
      <PersistantCounter />
      <br />
      {/* <TiltBox /> */}
    </>
  )
}

export default App
