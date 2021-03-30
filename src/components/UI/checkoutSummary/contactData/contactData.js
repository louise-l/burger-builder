import React, {Component}from 'react'
import Button from '../../button/button'
import './contactData.css'
import axios from '../../../../axios-orders'
import Spinner from '../../spinner/spinner'
import FormInput from "../../form/formInput"


class ContactData extends Component{
  state = {
    formIsValid: false,
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
        touched: false,
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
        touched: false,
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
        touched: false,
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
        touched: false,
      },
      suggestions: {
        elementType: 'textarea',
        elementConfig: {
          name: 'suggestions',
          placeholder: 'Your suggestions',
        },
        value: '',
        valid: true,
        touched: false,
      },
      deliveryMode: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'}, 
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: 'fastest',
        valid: true,
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

    if (!rules){
      return true
    }

    if (rules.required){
      isValid = value.trim() !== ''
    }
    return isValid
  }

  // check if every input is valid, and we can send the form
  isValidForm = (updatedElements) => {
    let isValid = [];
    for (let key in updatedElements){
      isValid.push(updatedElements[key].valid)
    }
    let everyTrueElement = []
    isValid.map(el => {
      if (el === true || undefined) {
        everyTrueElement.push(el)
      }
    })
    if (everyTrueElement.length === isValid.length){
      return true
    } else return false
  }

  handleChange = (event, id) => {
    //fetch the state
    const currentState = {...this.state.orderForm}
    // fetch the object of the changed element
    const updatedFormElement = {...currentState[id]}
    //check the validity 
    const elementIsValid = this.isValid(event.target.value, updatedFormElement.validations)
    //update the value (initially is empty string) & the validity & if touched
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = elementIsValid
    updatedFormElement.touched = true
    // update the coresponding object
    currentState[id] = updatedFormElement
    // check if the whole form is valid
    const formIsValid = this.isValidForm(currentState)
    //upload the whole new state
    this.setState({orderForm: currentState, formIsValid: formIsValid })
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
            valid = {el.config.valid}
            touched = {el.config.touched}
            changed = {(event) => this.handleChange (event, el.id)} />)
        })}
        <Button type= 'Success' action= {this.orderHandler} disabled = {!this.state.formIsValid}> Order now </Button>
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