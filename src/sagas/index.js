import { all } from 'redux-saga/effects'
import watchFetchData from './fetchApiSaga'

/**
 * generator function, all([..]) will make sure all functions within the array
 * are listening to actions
 * This is used here to demonstrate how to use saga with scalability in mind
*/
export default function * rootSaga () {
  yield all([
    watchFetchData()
  ])
}
