import React, {Component} from "react"
import BurgerIngredient from "./burgerIngredients/burgerIngredients"
import "./burger.css"

class Burger extends Component {


  render (){

    let ingredients = this.props.ingredients
    let customIngredients = []
    for (const [key, value] of Object.entries(ingredients)){
      for (let i =0; i < value; i++){
        let addThisIngredient = <BurgerIngredient type = {key} key ={i + key}/>
        customIngredients.push(addThisIngredient)
      }
    }

    if (customIngredients.length === 0) {
      customIngredients = <p> Add ingredients here</p>
    }


    return (
      <div className = "Burger">
        <BurgerIngredient type = "bread-top"/>
        {customIngredients}
        <BurgerIngredient type = "bread-bottom"/>
      </div>

    )
  }
}

export default Burger