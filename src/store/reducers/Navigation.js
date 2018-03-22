import { combineReducers } from 'redux'
import types from 'constants/ActionTypes'

const selectedLayer = (state = null, action) => {
  switch (action.type) {
    case types.CHANGE_LAYER:
      return action.payload
    default:
      return state
  }
}


export default combineReducers({
  selectedLayer
})