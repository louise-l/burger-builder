import React from 'react'
import Burger from '../../burger/burger'
import './checkoutSummary.css'
import Button from '../button/button'



const CheckoutSummary = (props) => {

  return (
    <div className = 'CheckoutSummary'>
      <h1>Your order :</h1>
      <Burger ingredients = {props.ingredients}/>
      <Button type = 'Danger' action = {props.goBack}>Go back</Button>
      <Button type = 'Success' action = {props.goContinue}>Go pay</Button>
    </div>
  ) 
}

export default CheckoutSummary