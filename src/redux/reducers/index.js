import { combineReducers } from 'redux'
import auth from './auth'
import drawer from './drawer'
import ui from './ui'
import youtube from './youtube'

export default combineReducers({
  auth,
  drawer,
  ui,
  youtube
})
