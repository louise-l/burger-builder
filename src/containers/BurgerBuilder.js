// This is the PAGE which renders the burger

import React, {Component} from 'react'
import Burger from '../components/burger/burger'
import BurgerControls from '../components/burger/burgerControls/burgerControls'
import Modal from '../components/UI/modal/modal'
import Spinner from "../components/UI/spinner/spinner"
import "../components/layout.css"
import OrderSummary from '../components/burger/orderSummary/orderSummary'
import axios from '../axios-orders'


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1,
  bacon: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0, 
      bacon: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  addIngredientHandler = (type) => {
    // GERER LES INGREDIENTS
    const currentComposition = {...this.state.ingredients}
    const currentCount = currentComposition[type]
    const newCount = currentCount + 1
    currentComposition[type] = newCount

    // GERER LE PRIX
    const currentPrice = this.state.totalPrice
    const itemPrice = INGREDIENT_PRICES[type]
    const newPrice = currentPrice + itemPrice

    //GERER LE BOUTON D'ACHAT
    const purchasable = Object.values(currentComposition).some(quantity => quantity > 0)

    // MAJ DE L'ETAT
    this.setState({totalPrice: newPrice, ingredients: currentComposition, purchasable: purchasable})
  }

  removeIngredientHandler = (type) => {
    // GERER LES INGREDIENTS
    const currentComposition = {...this.state.ingredients}
    const currentCount = currentComposition[type]
    if (currentCount <= 0){
      return
    }
    const newCount = currentCount - 1
    currentComposition[type] = newCount

    // GERER LE PRIX
    const currentPrice = this.state.totalPrice
    const itemPrice = INGREDIENT_PRICES[type]
    const newPrice = currentPrice - itemPrice

      //GERER LE BOUTON D'ACHAT
    const purchasable = Object.values(currentComposition).some(quantity => quantity > 0)


    // MAJ DE L'ETAT
    this.setState({totalPrice: newPrice, ingredients: currentComposition,  purchasable: purchasable})
  }

  // AFFICHER OU NON LA MODALE D'ACHAT
  purchasingHandler = () => {
    const purchasing = this.state.purchasing
    this.setState({purchasing: !purchasing})
  }
  
  // ENVOYER LA COMMANDE A LA DB
  continuePurchaseAlert = () => {
    const data = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer: {
        name:'Louise',
        deliveryMode:'fast'
      }
    }
    axios.post('/orders.json', data)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render(){
    
    const noIngredients = {...this.state.ingredients}
    for (let key in noIngredients){
      noIngredients[key] = noIngredients[key] <= 0
    }

    return (
      <div>
        <Burger ingredients = {this.state.ingredients}/>
        <BurgerControls 
          canPurchase = {this.state.purchasable}
          disable = {noIngredients}
          ingredients = {this.state.ingredients}
          price = {this.state.totalPrice}
          removeHandler = {this.removeIngredientHandler}
          addHandler = {this.addIngredientHandler}
          purchasing = {this.purchasingHandler}/>
        <Modal show = {this.state.purchasing} hide ={this.purchasingHandler}> 
          <OrderSummary 
            ingredients = {this.state.ingredients} 
            price = {this.state.totalPrice} 
            purchasing = {this.purchasingHandler}
            continue = {this.continuePurchaseAlert}/>
                    <Spinner/>

        </Modal>
      </div>

    )
  }
}

export default BurgerBuilder