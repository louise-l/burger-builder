import React from 'react'
import Logo from "../../logo/logo"
import NavigationItems from "../navigationItems/navigationItems/navigationItems"
import './sideDrawer.css'
import Backdrop from '../../UI/backdrop/backdrop'

const SideDrawer = (props) => {
  console.log(props)
  let attachedClasses = ['SideDrawer', 'Close']
  if (props.show){
    attachedClasses = ['SideDrawer', "Open"]
  }
  console.log(attachedClasses)
  return (
    <div>
      <Backdrop show = {props.show} hide = {props.hide}/>
      <div className={attachedClasses.join(' ')}>
        <Logo/>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </div>

  )
}


export default SideDrawer