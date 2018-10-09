import * as types from '../actions/types'

const initialState = {
  countries: {
    'Bulgaria': {
      name: 'Bulgaria',
      region: 'Europe'
    },
    'Germany': {
      name: 'Germany',
      region: 'Europe'
    },
    'France': {
      name: 'France',
      region: 'Europe'
    }
  },
  selectedCountry: 'Bulgaria',
  searchFieldInput: ''
}

export default function countriesReducer (state = initialState, action) {
  switch (action.type) {
    case types.ALL_COUNTRIES_FETCH_SUCCEEDED:
      const countries = {}
      action.data.forEach(country => {
        countries[country.name] = country
      })
      return {
        ...state,
        countries: countries
      }
    case types.REQUEST_FAILED:
      return {
        ...state
      }
    case types.SINGLE_COUNTRY_SUCCEEDED:
      return {
        ...state,
        selectedCountry: action.name
      }
    case types.CHANGE_SEARCH_FIELD_INPUT:
      return {
        ...state,
        searchFieldInput: action.inputValue
      }
    default:
      return state
  }
}
