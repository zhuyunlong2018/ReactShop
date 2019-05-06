
import { createStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import * as user from './user/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({...user}),
  composeEnhancers(
    applyMiddleware(thunk)
  ));
export default store;