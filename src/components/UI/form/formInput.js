import React from 'react'
import './formInput.css'

const FormInput = props => {
  let inputElement = null
  let classesInput = ['FormInput']

  if (props.valid === false && props.touched) {
    classesInput.push('Invalid')
  }

  switch (props.inputType) {

    case ('textarea') : 
      inputElement = 
      <textarea {...props.inputConfig} 
        className= {classesInput.join(' ')}
        onChange = {props.changed}
        value = {props.value}/>
      break;

    case ('select') : 
      inputElement = 
      <select {...props.inputConfig} 
        className= {classesInput.join(' ')}
        onChange = {props.changed}
        value = {props.value}>
        {props.inputConfig.options.map(el => {
          return <option key = {el.value} value = {el.value}>{el.displayValue}</option>
        })}
      </select>
      break
      
    default : 
      inputElement = 
      <input {...props.inputConfig} 
        className= {classesInput.join(' ')}
        value = {props.value}
        onChange = {props.changed}/>
  }

  let errorMessage = null

  if (props.valid === false && props.touched) {
    errorMessage = <p className = 'ErrorMessageForm'> <span role="img">⛔️</span> This element cannot be empty</p>
  }

  return (
    <React.Fragment>
      {inputElement}
      {errorMessage}
    </React.Fragment>

  )
}

export default FormInput