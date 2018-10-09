import * as types from './types'

export const requestAllCountries = () => ({
  type: types.ALL_COUNTRIES_FETCH_REQUESTED
})

export const selectCountry = name => ({
  type: types.SELECT_SINGLE_COUNTRY,
  name
})

export const changeSearchFieldInput = inputValue => ({
  type: types.CHANGE_SEARCH_FIELD_INPUT,
  inputValue
})
