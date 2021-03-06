import React, { Component } from "react"
import Backdrop from '../backdrop/backdrop'
import "./modal.css"

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  render () {
    return (
    <div>
      <Backdrop show = {this.props.show} hide = {this.props.hide} />
      <div className ='Modal'
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0' }}>
        {this.props.children}
      </div>
    </div>)
  }


}

export default Modal