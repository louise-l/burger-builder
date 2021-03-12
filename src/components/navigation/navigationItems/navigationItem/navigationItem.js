import React from 'react'
import './navigationItem.css'

const NavigationItems = (props) => {
  return (
    <li className = "NavigationItem">
      <a href = {props.link}
          className = {props.active ? 'active' : null}>
        {props.children}
      </a>
    </li>
  )
}

export default NavigationItems