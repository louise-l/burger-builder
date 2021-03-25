import React, {Component}from 'react'
import Button from '../../button/button'
import './contactData.css'
import axios from '../../../../axios-orders'
import Spinner from '../../spinner/spinner'


class ContactData extends Component{
  state = {
    name: '',
    email: '',
    city: '',
    zipCode: '',
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({loading: true})
    const data = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: {
        name: this.state.name,
        email: this.state.email,
        city: this.state.city,
        zipCode: this.state.zipCode,
        deliveryMode:'fast'
      }
    }
    axios.post('/orders.json', data)
      .then(() => {
        this.setState( { loading:false } )
        this.props.history.push('/')
        alert('Thank you for your purchase ! Your delivery will be here soon')
      })
      .catch(() => this.setState({loading:false}))
    }

  handleChange = (event) => {
    let value = event.target.name
    this.setState({[value]: event.target.value})
  }

  render (){
    let form = (
      <form action="" method="get">
        <input type="text" name="name" placeholder='Name' className="Input" required onChange = {this.handleChange}/>
        <input type="email" name="email" placeholder='email@tata.com' className="Input" required onChange = {this.handleChange}/>
        <input type="city" name="city" placeholder='City' className="Input" required onChange = {this.handleChange}/>
        <input type="zipCode" name="zipCode" placeholder='zipCode' className="Input" required onChange = {this.handleChange}/>
        <Button type= 'Success' action = {this.orderHandler}>
            Order now :)
        </Button>
      </form>
    )

    if (this.state.loading){
      form = <Spinner/>
    }

      return (
        <div className = 'ContactData'>
          <h2>Please enter your contact to complete your order</h2>
          {form}
        </div>
      )
    
  }
}

export default ContactData