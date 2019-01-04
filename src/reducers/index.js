import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter.js'

export default combineReducers({
  todos,
  visibilityFilter
})