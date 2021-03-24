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
    ingredients: {
      salad: 1,
      meat: 1,
      bacon: 1,
      cheese: 1,
    }
  }
  goBackHandler = () => {
    this.props.history.goBack()
  }

  goContinueHandler = () => {
    console.log('continue handler')
    this.props.history.replace(this.props.match.path +'/fill-data')
  }

  render (){
    console.log(this.props.history.location.state)
    return (
      <div>
        <CheckoutSummary 
          ingredients = {this.props.history.location.state} 
          goBack = {this.goBackHandler} 
          goContinue = {this.goContinueHandler}/>
        <Route to={this.props.match.path + '/fill-data'} component = {ContactData}/>
      </div>
    )
  }
}

export default Checkout