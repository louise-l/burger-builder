import React, { Component }from 'react'
import "./layout.css"
import Toolbar from "./navigation/toolbar/toolbar"
import SideDrawer from "./navigation/sideDrawer/sideDrawer"

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerToggleHandler = () => {
    const showSideDrawer = this.state.showSideDrawer
    this.setState({showSideDrawer: !showSideDrawer})
  }

  render () {
    return (
      <React.Fragment class = 'Layout'>
        <Toolbar toggleMenu = {this.sideDrawerToggleHandler}/>
        <SideDrawer show = {this.state.showSideDrawer} hide = {this.sideDrawerToggleHandler}/>
        <main className = "Content">
          {this.props.children}
        </main>
      </React.Fragment>
      )
  }

}

export default Layout
