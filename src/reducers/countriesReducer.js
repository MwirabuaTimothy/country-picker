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
  selectedCountry: 'Bulgaria'
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
    case types.SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.name
      }
    default:
      return state
  }
}
