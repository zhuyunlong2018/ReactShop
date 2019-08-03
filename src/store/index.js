
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as user from './user/reducer'
import * as common from './common/reducer'
import * as cart from './shoppingCart/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({ ...user, ...common, ...cart }),
  composeEnhancers(
    applyMiddleware(thunk)
  ));
export default store;