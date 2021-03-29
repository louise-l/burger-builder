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
        validations: {
          required: true,
        },
        valid: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          name: 'email',
          placeholder: 'Email',
        },
        value: '',
        validations: {
          required: true,
        },
        valid: false,
      },
      city: {
        elementType: 'input',
        elementConfig: {
          name: 'city',
          placeholder: 'Your City',
        },
        value: '',
        validations: {
          required: true,
        },
        valid: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          name: 'zipCode',
          placeholder: 'zipCode',
        },
        value: '',
        validations: {
          required: true,
        },
        valid: false,
      },
      suggestions: {
        elementType: 'textarea',
        elementConfig: {
          name: 'suggestions',
          placeholder: 'Your suggestions',
        },
        value: '',
        validations: {
          required: true,
        },
        valid: false,
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
    const data = {}
    for (let formElement in this.state.orderForm) {
      data[formElement] = this.state.orderForm[formElement].value
    }
    const orderToSend = {
      order: data, 
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice
    }
    
    axios.post('/orders.json', orderToSend)
    .then(() => {
      this.setState( { loading:false } )
        this.props.history.push('/')
        alert('Thank you for your purchase ! Your delivery will be here soon')
      })
    .catch(() => this.setState({loading:false}))
  }

  isValid = (value, rules) => {
    let isValid = false
    console.log('value is valid', value, 'rules', rules)
    if (rules.required){
      isValid = value.trim().length !== 0
    }
    return isValid
  }

  handleChange = (event, id) => {
    //fetch the state
    const currentState = {...this.state.orderForm}
    // fetch the object of the changed element
    const updatedFormElement = {...currentState[id]}
    //check the validity 
    const elementIsValid = this.isValid(event.target.value, updatedFormElement.validations)
    //update the value (initially is empty string) & the validity
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = elementIsValid
    // update the coresponding object
    currentState[id] = updatedFormElement
    //upload the whole new state
    if (elementIsValid) this.setState({orderForm: currentState})
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
      <form >
        {formElements.map(el => {
          return (<FormInput 
            inputType = {el.config.elementType} 
            inputConfig = {el.config.elementConfig}  
            key = {el.id}
            changed = {(event) => this.handleChange (event, el.id)} />)
        })}
        <Button type= 'Success' action= {this.orderHandler} > Order now </Button>
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