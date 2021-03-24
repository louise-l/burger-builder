import React, {Component}from 'react'
import Button from '../../button/button'

class ContactData extends Component{
  state = {
    name: '',
    email: '',
    address: {
      city: '',
      zipCode: '',
    }
  }
  render (){
      return (
        <div>
          <h2>Please enter your contact to complete your order</h2>
          <form action="" method="get">
            <input type="text" name="name" placeholder='Name' id="name" required/>
            <input type="email" name="email" placeholder='email@tata.com' id="email" required/>
            <input type="city" name="city" placeholder='City' id="city" required/>
            <input type="zipCode" name="zipCode" placeholder='zipCode' id="zipCode" required/>
            <Button type= 'Success' action = {()=> console.log('proceed to checkout')}>Order now :)</Button>
          </form>
        </div>
      )
    
  }
}

export default ContactData