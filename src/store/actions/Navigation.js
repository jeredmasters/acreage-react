import types from 'constants/ActionTypes'


export const changeLayer = layer => ({
  type: types.CHANGE_LAYER,
  payload: layer
})
