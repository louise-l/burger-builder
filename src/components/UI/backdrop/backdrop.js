import React from 'react';
import './backdrop.css'

const Backdrop = (props) => {
  return (props.show ? <div className = 'Backdrop' onClick = {props.hide}></div> : null)
}

export default Backdrop;