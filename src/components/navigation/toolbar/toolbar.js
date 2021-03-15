import React from 'react'
import './toolbar.css'
import Logo from '../../logo/logo'
import NavigationItems from '../navigationItems/navigationItems/navigationItems'
import MenuItem from '../sideDrawer/menuItem/menuItem'

const Toolbar = (props) => {
  return (
    <div className = "Toolbar">
      <MenuItem toggle={props.toggleMenu}/>
      <Logo/>
      <nav className = "DesktopOnly">
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default Toolbar