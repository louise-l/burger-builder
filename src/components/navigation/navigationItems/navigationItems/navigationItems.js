import React from 'react'
import NavigationItem from '../navigationItem/navigationItem'
import './navigationItems.css'

const NavigationItems = () => {
  return (
    <ul className = "NavigationItems">
      <NavigationItem link = "/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link = "/" >
        Checkout
      </NavigationItem>    
    </ul>
  )
}

export default NavigationItems