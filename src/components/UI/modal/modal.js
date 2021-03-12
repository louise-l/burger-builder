import React from "react"
import Backdrop from '../backdrop/backdrop'
import "./modal.css"

const Modal = (props) => {
  return (
    <div>
      <Backdrop show = {props.show} hide = {props.hide} />
      <div className ='Modal'
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0' }}>
        {props.children}
      </div>
    </div>)

}

export default Modal