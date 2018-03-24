import { combineReducers } from 'redux'
import types from 'constants/ActionTypes'
import Immutable from 'seamless-immutable'

const Polygons = (state = null, action) => {
  switch (action.type) {
    case types.RECEIVE_POLYGONS:
      return Immutable(action.payload)
    case types.SAVE_NEW_POLYGON:
      return state.concat(action.payload)
    default:
      return state
  }
}
const NewPolygon = (state = null, action) => {
  switch (action.type) {
    case types.CREATE_NEW_POLYGON:
      return Immutable(
        {
          id: 123,
          title: action.payload,
          polygon: []
        }        
      )
    case types.SET_POLYGON_TITLE:
      return state.setIn(['title'], action.payload)
    case types.ADD_NEW_POLYGON_POINT:
      return state.setIn(['polygon'], state.polygon.concat(action.payload))
    case types.SAVE_NEW_POLYGON:
      return null
    default:
      return state
  }
}

export default combineReducers({
  Polygons,
  NewPolygon
})