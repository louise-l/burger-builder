import React, { Component} from 'react'
import Button from '../../UI/button/button'


class OrderSummary extends Component {

  render() { 
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (<li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
        </li>)
    })

    return (
      <div>
        <h3>Summary</h3>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Price : {this.props.price.toFixed(2)} €</p>
        <Button type ="Success" action = {this.props.continue}>Proceed to checkout</Button>
        <Button type = "Danger" action = {this.props.purchasing} >Back to order</Button>
      </div>
    )
  }


}

export default OrderSummary