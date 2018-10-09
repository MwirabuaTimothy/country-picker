import { takeEvery, call, put } from 'redux-saga/effects'
import * as types from '../actions/types'

/**
 * returns a single country from the restcountries api
 * @param {string} name
 * @return {Promise}
 */
const fetchSingleCountry = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`
  return fetch(url).then((response) => {
    if (response.status !== 200) {
      throw new Error(response.status)
    }
    return response.json()
  }).then(data => console.log(data))
}

/**
 * generator function which calls fetchSingleCountry and dispatches the according action
 * once fetchSingleCountry returns the promise
 */
function * fetchSingleCountryData (action) {
  try {
    const data = yield call(fetchSingleCountry, action.name)
    yield put({ type: types.SINGLE_COUNTRY_SUCCEEDED, data })
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, error })
  }
}

/**
 * generator function which listens to every dispatch of actions
 * and executes the respective functions
*/
export default function * watchFetchData () {
  yield takeEvery(types.SINGLE_COUNTRY_REQUEST, fetchSingleCountryData)
}
