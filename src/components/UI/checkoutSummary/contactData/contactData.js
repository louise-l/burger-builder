import React, {Component}from 'react'
import Button from '../../button/button'
import './contactData.css'
import axios from '../../../../axios-orders'
import Spinner from '../../spinner/spinner'
import FormInput from "../../form/formInput"


class ContactData extends Component{
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          name: 'name',
          placeholder: 'Name',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          name: 'email',
          placeholder: 'Email',
        },
        value: '',
      },
      city: {
        elementType: 'input',
        elementConfig: {
          name: 'city',
          placeholder: 'Your City',
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          name: 'zipCode',
          placeholder: 'zipCode',
        },
        value: '',
      },
      suggestions: {
          elementType: 'textarea',
          elementConfig: {
            name: 'suggestions',
            placeholder: 'Your suggestions',
          },
          value: '',
      },
      deliveryMode: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'}, 
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: '',
      }
    }
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
      console.log('the data sent to the DB',data)
        this.props.history.push('/')
        alert('Thank you for your purchase ! Your delivery will be here soon')
      })
      .catch(() => this.setState({loading:false}))
  }

  handleChange = (event, id) => {
    //fetch the state
    const currentState = {...this.state.orderForm}
    // fetch the object of the changed element
    const updatedFormElement = {...currentState[id]}
    //update the value (initially is empty string)
    updatedFormElement.value = event.target.value
    // update the coresponding object
    currentState[id] = updatedFormElement
    //upload the whole new state
    console.log(this.state.orderForm[id])
    this.setState({orderForm: currentState})
  }

  render (){
    const formElements = []
    for (let key in this.state.orderForm){
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }

    let form = (
      <form>
        {formElements.map(el => {
          return (<FormInput 
            inputType = {el.config.elementType} 
            inputConfig = {el.config.elementConfig}  
            key = {el.id}
            changed = {(event) => this.handleChange (event, el.id)} />)
        })}
        <Button type= 'Success' action = {this.orderHandler}> Order now </Button>
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