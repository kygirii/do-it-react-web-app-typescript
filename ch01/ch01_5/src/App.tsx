import React from 'react'
// import logo from './logo.svg'
import './App.css'
import * as D from './data'

function App() {
  console.log('App callled.')
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" />
      <img src={D.randomImage()} height="300" />
    </div>
  )
}

export default App
