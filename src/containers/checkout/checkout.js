import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import ContactData from '../../components/UI/checkoutSummary/contactData/contactData'

import CheckoutSummary from '../../components/UI/checkoutSummary/checkoutSummary'

// confirmation of purchase 
// tiny summary of the chekout : price 
// the burger itself
// button cancel and go back and to continue

class Checkout extends Component{
  state = {
    ingredients: 0, 
    totalPrice: 0,
    loading: false
  }


  goBackHandler = () => {
    this.props.history.goBack()
  }

  goContinueHandler = () => {
    this.props.history.replace('/checkout/fill-data')
  }

  componentDidMount = () => {
    if (this.props.history.location.state){
      let ingredients = this.props.history.location.state.ingredients
      let totalPrice = this.props.history.location.state.totalPrice
      this.setState({ingredients: ingredients, totalPrice: totalPrice})
    } else { this.setState({ingredients: {salad:0}}) }
  }



  render (){
    return (
      <div>
        <CheckoutSummary 
          ingredients = {this.state.ingredients} 
          goBack = {this.goBackHandler} 
          goContinue = {this.goContinueHandler}/>
        <Route 
          path={this.props.match.path + '/fill-data'} 
          render = {(props) => <ContactData 
                      ingredients = {this.state.ingredients}
                      totalPrice = {this.state.totalPrice}
                      {...props}
                      />}
        />
      </div>
    )
  }
}

export default Checkout