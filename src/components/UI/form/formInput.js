import React from 'react'
import './formInput.css'

const FormInput = props => {
  let inputElement = null

  switch (props.inputType) {
    case ('textarea') : inputElement = 
      <textarea {...props.inputConfig} className='FormInput'
      onChange = {props.changed}
      value = {props.value}/>
      break;
      case ('select') : inputElement = 
      <select {...props.inputConfig} className='FormInput'
      onChange = {props.changed}
      value = {props.value}>
        {props.inputConfig.options.map(el => {
          return <option key = {el.value} value = {el.value}>{el.displayValue}</option>
        })}
      </select>
      break
      default : inputElement = 
      <input {...props.inputConfig} className='FormInput'
      value = {props.value}
      onChange = {props.changed}/>
  }

  return (
    <div>
      {inputElement}
    </div>
  )
}

export default FormInput