// Vendor
import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import { Polygon } from "react-google-maps"
import { connect } from 'react-redux'

// Store
import {addNewPolygonPoint} from 'store/actions/Map'

// Style
import "./style.scss"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_VUGh3U4g-hm-Oqw_esFeiqO2sf8QY9w&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    onClick={props.onClick}
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.children}
    
  </GoogleMap>
)

class Map extends React.PureComponent {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  renderPolygons(){
    if (this.props.Polygons === null){
      return null
    }
    const polygons = (
      this.props.newPolygon !== null && this.props.newPolygon.polygon.length > 0
      ? this.props.Polygons.concat(this.props.newPolygon)
      : this.props.Polygons
    )
    return polygons.map(land => {
      let polygon = land.polygon.concat(land.polygon[0])
      return (
        <Polygon key={land.id} paths={polygon} 
          options={{
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35
          }} />
      )
    })
  }

  handleClick(event){
    console.log(event)
    if (this.props.newPolygon !== null){
      this.props.addNewPolygonPoint(
        {
          lat: event.latLng.lat(), 
          lng: event.latLng.lng()
        })
    }
  }   

  render() {
    return (

      <MyMapComponent
        onClick={this.handleClick}
      >
      {this.renderPolygons()}
      
      </MyMapComponent>
    )
  }
}


const mapStateToProps = (state) => ({
  Polygons: state.Map.Polygons,
  newPolygon: state.Map.NewPolygon,
})

const mapDispatchToProps = ({
  addNewPolygonPoint
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)