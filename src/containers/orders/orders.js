import React, { Component } from 'react'
import instance from '../../axios-orders'
import Spinner from '../../components/UI/spinner/spinner'
import Order from './order/order'

class Orders extends Component {
  state = {
    orders: [],
    loading: false
  }
  componentDidMount(){
    this.setState({loading: true})
    instance.get('/orders.json')
      .then(response => {
        let ordersRaw = response.data
        let ordersTidy = []
        for (let key in ordersRaw){
          ordersTidy.push({
            ...ordersRaw[key], 
            id: key
          })
        this.setState({orders: ordersTidy, loading: false})
        }
      })
      .catch(err => {
        this.setState({loading: false});
    });
  }
  
  
  
  render () {
    console.log(this.state)
    let ordersToDisplay = (
      this.state.orders.map( order => (
        <Order key = {order.key} 
          ingredients = {order.ingredients}
          price = {order.totalPrice}/>
      ))
    )
      
      if ( this.state.loading ) { ordersToDisplay = (<Spinner/>)}
      
      return (
        <div>
        <h1 style = {{textAlign: 'center'}}>Your past orders</h1>
        {ordersToDisplay}
      </div>
    )
  }
}

export default Orders