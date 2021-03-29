import React from 'react'
import './order.css'

const Order = (props) => {
  const ingredientComposition = []

  for (let ingredientName in props.ingredients){
    ingredientComposition.push(
      {
      ingredientName: ingredientName,
      ingredientAmount: props.ingredients[ingredientName]
      })
  }

  const ingredientOutput = ingredientComposition.map(ingr => {
    if (ingr.ingredientAmount === 0){
      return null
    } else {

      return (
        <span key = {ingr.key} className = 'IngredientOutput'>
          {ingr.ingredientName} ({ingr.ingredientAmount})
        </span>
      )
    }
    })
  
  return (
    <div className = 'Order'>
      <span className = 'IngredientList'>Ingredients : {ingredientOutput}</span>
      <p>
        Price : 
          <strong>
            {Number.parseFloat( props.price ).toFixed( 2 )}
          </strong> €
      </p>
    </div>
  )
}

export default Order