// Vendor
import React, {Component} from 'react'
import { connect } from 'react-redux'

// Style
import "./style.scss"

class Header extends Component {
  render(){
    return (
      <header className="header">
        <h1 className="title">Acreage - {this.props.selectedLayer}</h1>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedLayer: state.Navigation.selectedLayer
})

export default connect(mapStateToProps, null)(Header)