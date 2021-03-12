import React from 'react'
import './button.css'

const Button = (props) => {
  return (
  <div onClick = {props.hide}>
    <p className = {[props.type, 'Button'].join(' ')}>{props.children}</p>
  </div>)
}

export default Button