// this is the section where we have all the controls of our burger. Buttons to build it

import React from "react"
import "./burgerControls.css"
import IngredientButton from "./ingredientButton/ingredientButton"
import Spinner from '../../UI/spinner/spinner'

const BurgerControls = (props) => {
  let ingredientList = Object.keys(props.ingredients)
  let buttons = ingredientList.map(ingr => {
    return <IngredientButton 
      toDisable = {props.disable[ingr]}
      ingredient = {ingr} 
      key = {ingr}
      remove = {() => props.removeHandler(ingr)}
      add = {() => props.addHandler(ingr)}/> 
  })

  let burgerControlContent = 
    <div className="burgerControl">
      <h3>What ingredient would you like to add ?</h3>
      {buttons}
      <p>Total price : {props.price.toFixed(2)} €</p>
      <button className = "OrderButton" disabled = {!props.canPurchase} onClick={props.purchasing}>ORDER NOW</button>
    </div>
  if (props.loading){
    burgerControlContent = <Spinner/>
  }

  return (
    <div>
    {burgerControlContent}
    </div>
    )
}

export default BurgerControls