import types from 'constants/ActionTypes'

export const receivePolygons = (polygons) => (
  {
    type: types.RECEIVE_POLYGONS,
    payload: polygons
  }
)

export const startNewPolygon = (title) => (
  {
    type: types.CREATE_NEW_POLYGON,
    payload: title
  }
)

export const setPolygonTitle = (title) => (
  {
    type: types.SET_POLYGON_TITLE,
    payload: title
  }
)

export const addNewPolygonPoint = (point) => (
  {
    type: types.ADD_NEW_POLYGON_POINT,
    payload: point
  }
)

export const saveNewPolygon = (polygon) => (
  {
    type: types.SAVE_NEW_POLYGON,
    payload: polygon
  }
)