import React from 'react'
import './toolbar.css'
import Logo from '../../logo/logo'
import NavigationItems from '../navigationItems/navigationItems/navigationItems'
import MenuItem from '../sideDrawer/menuItem/menuItem'
import { NavLink } from 'react-router-dom'

const Toolbar = (props) => {
  return (
    <div className = "Toolbar">
      <MenuItem toggle={props.toggleMenu}/>
      <NavLink to= '/'>
        <Logo/>
      </NavLink>
      <nav className = "DesktopOnly">
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default Toolbar