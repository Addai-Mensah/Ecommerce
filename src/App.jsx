import React from 'react'
import {Hero} from "./Components"
import { heroapi } from './Data/data.js'

const App = () => {
  return (
    <div>
      <Hero heroapi={heroapi}/>
    </div>
  )
}

export default App
