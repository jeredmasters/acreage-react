// Vendor
import React, {Component} from 'react'
import { connect } from 'react-redux'

// Store
import {changeLayer} from 'store/actions/Navigation'


class Navigation extends Component {
    changeLayer(layer){
      this.props.changeLayer(layer)
    }

    render(){
        const layers = [
            {
                key: 'tennaments',
                label: "Tennaments"
            },
            {
                key: 'somethingelse',
                label: "Something Else"
            },
            {
                key: 'random',
                label: "Random"
            }
        ]
        return(
        <div>
            <ul>
                {layers.map(layer => (<li onClick={() => this.changeLayer(layer.key)}>{layer.label}</li>))}
            </ul>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
  selectedLayer: state.Navigation.selectedLayer
})

const mapDispatchToProps = ({
  changeLayer
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)