import React, {Component} from 'react'

import "./style.scss"

class Button extends Component {
  render(){
    const {children, ...others} =  this.props
    return (<button type="button" {...others}>{children}</button>)
  }
}

export default Button