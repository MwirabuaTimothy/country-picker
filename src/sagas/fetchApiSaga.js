import { takeEvery, call, put, select } from 'redux-saga/effects'
import * as types from '../actions/types'
import { createCountryObject } from '../utils/helperFunctions'
import { countriesDetails } from '../utils/selectors'

/**
 * returns all european countries from the restcountries api
 * @return {Promise}
 */
const fetchAllCountries = () => {
  const url = 'https://restcountries.eu/rest/v2/region/europe?fields=name;region'
  return fetch(url).then((response) => {
    if (response.status !== 200) {
      throw new Error(response.status)
    }
    return response.json()
  }).then(data => data)
}

/**
 * generator function which calls fetchAllCountries and dispatches the according action
 * once fetchAllCountries returns the promise
 */
function * fetchData () {
  try {
    const data = yield call(fetchAllCountries)
    yield put({ type: types.ALL_COUNTRIES_FETCH_SUCCEEDED, data })
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, error })
  }
}

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
  }).then(data => createCountryObject(data))
}

/**
 * generator function which calls fetchSingleCountry and dispatches the according action
 * once fetchSingleCountry returns the promise
 */
function * getSingleCountry (action) {
  const _countriesDetails = yield select(countriesDetails)
  let data = _countriesDetails[action.name]
  if (data) {
    yield put({ type: types.SINGLE_COUNTRY_SUCCEEDED, data })
  } else {
    try {
      data = yield call(fetchSingleCountry, action.name)
      yield put({ type: types.SINGLE_COUNTRY_SUCCEEDED, data })
    } catch (error) {
      yield put({ type: types.REQUEST_FAILED, error })
    }
  }
}

const fetchFailed = () => {
  console.log('failed')
}

/**
 * generator function which listens to every dispatch of actions
 * and executes the respective functions
*/
export default function * watchFetchData () {
  // yield put({ type: types.SELECT_SINGLE_COUNTRY, 'name': 'Netherlands' })
  // yield put({ type: types.ALL_COUNTRIES_FETCH_REQUESTED })

  yield takeEvery(types.ALL_COUNTRIES_FETCH_REQUESTED, fetchData)
  yield takeEvery(types.SELECT_SINGLE_COUNTRY, getSingleCountry)
  yield takeEvery(types.REQUEST_FAILED, fetchFailed)
}
