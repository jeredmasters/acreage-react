import React, {Component} from 'react'

import "./style.scss"

class Text extends Component {
  render(){
    return (<input className="form-input-text" type="text" {...this.props} />)
  }
}

export default Text