import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

// components
import AppLayout from '../layouts/AppLayout'

// reducers
import rootReducer from '../reducers'

// initial store setup
const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middlewares = []
  const enhancers = [applyMiddleware(...middlewares)]
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  )
}

// create store
const initialState = {}
const store = configureStore(initialState)

// wrap rest of the App in a provider
const AppContainer = () => (
  <Provider store={store}>
    <AppLayout />
  </Provider>
)

export default AppContainer
