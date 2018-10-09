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
  countriesDetails: {
    'Åland Islands': {
      name: 'Åland Islands',
      region: 'Europe',
      flag: 'https://restcountries.eu/data/ala.svg',
      languages: [{ iso639_1: 'sv', iso639_2: 'swe', name: 'Swedish', nativeName: 'svenska' }],
      capital: 'Mariehamn',
      currencies: [{ code: 'EUR', name: 'Euro', symbol: '€' }],
      population: 28875
    }
  },
  selectedCountry: 'Åland Islands',
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
      const country = action.data
      const countriesDetails = { ...state.countriesDetails } // make a copy
      countriesDetails[country.name] = country

      return {
        ...state,
        countriesDetails,
        selectedCountry: country.name
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
