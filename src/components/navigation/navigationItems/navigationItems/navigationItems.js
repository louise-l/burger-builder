import React from 'react'
import NavigationItem from '../navigationItem/navigationItem'
import './navigationItems.css'


const NavigationItems = () => {
  return (
    <ul className = "NavigationItems">
      <NavigationItem link = "/" exact>
        Burger Builder
      </NavigationItem>
      
      <NavigationItem link = "/orders" >
        Orders
      </NavigationItem>   

    </ul>
  )
}

export default NavigationItems