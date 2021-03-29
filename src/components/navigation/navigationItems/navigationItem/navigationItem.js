import React from 'react'
import './navigationItem.css'
import { NavLink } from 'react-router-dom'


const NavigationItems = (props) => {
  return (
    <li className = "NavigationItem">
      {/* <a href = {props.link}
          className = {props.active ? 'active' : null}>
        {props.children}
      </a> */}
      <NavLink 
          to = {props.link}
          exact = {props.exact}
       >
        {props.children}
      </NavLink>
    </li> 

  )
}

export default NavigationItems