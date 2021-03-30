import React from 'react'
import './button.css'

const Button = (props) => {
  return (
  <div onClick = {props.action}>
    <button className = {[props.type, 'Button'].join(' ')} disabled = {props.disabled} >{props.children}</button>
  </div>)
}

export default Button