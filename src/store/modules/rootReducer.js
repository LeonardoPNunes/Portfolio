import { combineReducers } from 'redux'
import loading from "./loading/index"
import global from "./global/index"

export default combineReducers({
  global,
  loading
})
