import React from 'react'
import burgerLogo from "../../assets/images/burgerlogo.png"
import "./logo.css"

const Logo =() => {
  return (
    <div className='Logo'>
      <img src = {burgerLogo} alt = 'burgerLogo'/>
    </div>
  )
}

export default Logo