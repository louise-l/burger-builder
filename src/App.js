import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from "./components/layout";
import BurgerBuilder from "./containers/BurgerBuilder"
import Checkout from './containers/checkout/checkout'
import Orders from './containers/orders/orders'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Layout>
            <Route path = '/' exact component = {BurgerBuilder}/>
            <Route path = '/checkout'  component = {Checkout}/>
            <Route path = '/orders'  component = {Orders}/>
          </Layout>
        </React.Fragment>
      </BrowserRouter>
      
    );
  }
}

export default App;
