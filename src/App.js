import React, { Component } from 'react';
import Layout from "./components/layout";
import BurgerBuilder from "./containers/BurgerBuilder"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
