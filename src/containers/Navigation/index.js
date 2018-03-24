// Vendor
import React, {Component} from 'react'
import { connect } from 'react-redux'

// Components
import Text from 'components/Form/Text'
import Button from 'components/Form/Button'

// Store
import {changeLayer} from 'store/actions/Navigation'
import {startNewPolygon, setPolygonTitle, saveNewPolygon} from 'store/actions/Map'

// Style
import "./style.scss"

class Navigation extends Component {
  constructor(props){
    super(props)

    this.handlerNewPolygon = this.handlerNewPolygon.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSavePolygon = this.handleSavePolygon.bind(this)
  }
  changeLayer(layer){
    this.props.changeLayer(layer)
  }
  handlerNewPolygon(event){
    this.props.startNewPolygon(event.target.value)
  }
  handleTitleChange(event){
    this.props.setPolygonTitle(event.target.value)
  }
  handleSavePolygon(event){
    this.props.saveNewPolygon(this.props.newPolygon)
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
      <div className="navigation">
        <div className="buffer"/>
        <ul>
          {layers.map(layer => (<li key={layer.key} onClick={() => this.changeLayer(layer.key)}>{layer.label}</li>))}
        </ul>
        <div className="bottom-panel">
        {this.props.newPolygon == null
          ? <Button onClick={this.handlerNewPolygon}>Add Region</Button>    
          : <div>
              <Text value={this.props.newPolygon.title} onChange={this.handleTitleChange}/> 
              <Button onClick={this.handleSavePolygon}>Save</Button>    
            </div>
        }
        </div>
      </div>
      )
  }
}

const mapStateToProps = (state) => ({
  selectedLayer: state.Navigation.selectedLayer,
  newPolygon: state.Map.NewPolygon
})

const mapDispatchToProps = ({
  changeLayer,
  startNewPolygon, 
  setPolygonTitle,
  saveNewPolygon
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)