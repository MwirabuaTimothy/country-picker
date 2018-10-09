import * as types from './types'

export const requestAllCountries = () => ({
  type: types.ALL_COUNTRIES_FETCH_REQUESTED
})

export const selectCountry = name => ({
  type: types.SINGLE_COUNTRY_REQUEST,
  name
})

export const setActiveCountryListItem = name => ({
  type: types.SET_SELECTED_COUNTRY,
  name
})
