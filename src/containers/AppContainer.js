import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

// components , reducers, sagas
import AppLayout from '../layouts/AppLayout'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

// initial store setup
const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middlewares = [sagaMiddleware]
  const enhancers = [applyMiddleware(...middlewares)]
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  )
  sagaMiddleware.run(rootSaga)
  return store
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
