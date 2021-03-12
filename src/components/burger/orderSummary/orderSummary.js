import React from 'react'
import Button from '../../UI/button/button'

const OrderSummary = (props) =>{
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (<li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
        </li>)
    })
  return (<div>
    <h3>Summary</h3>
    <ul>
      {ingredientSummary}
    </ul>
    <p>Price : {props.price.toFixed(2)} €</p>
    <Button type ="Success">Proceed to checkout</Button>
    <Button type = "Danger" hide = {props.purchasing} >Back to order</Button>
  </div>)
}

export default OrderSummary