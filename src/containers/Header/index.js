// Vendor
import React, {Component} from 'react'
import { connect } from 'react-redux'


class Header extends Component {
  render(){
    return (
      <header className="App-header">
        <h1 className="App-title">Acreage - {this.props.selectedLayer}</h1>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedLayer: state.Navigation.selectedLayer
})

export default connect(mapStateToProps, null)(Header)