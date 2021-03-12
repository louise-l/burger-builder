// this is the button component for adding an ingredient
import React from 'react'
import "./ingredientButton.css"
import Button from '../../../UI/button/button'

const IngredientButton = (props) => {
  return (
    <div className='ingredientButton'>
      <button className = 'tinyButton' onClick = {props.remove} disabled = {props.toDisable}>-</button>
        <p>{props.ingredient}</p>
      <button className = 'tinyButton' onClick = {props.add}>+</button>
    </div>

  )
}

export default IngredientButton