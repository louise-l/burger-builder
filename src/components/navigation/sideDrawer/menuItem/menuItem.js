import React from 'react'
import './menuItem.css'
import menuIcon from '../../../../assets/images/menu.png'

const MenuItem = (props) => {
  return (
    <div onClick = {props.toggle}className='MenuItem'>
      <img src={menuIcon} alt = 'menu icon'/>
    </div>
  )
}


export default MenuItem