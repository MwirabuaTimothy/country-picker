import * as types from '../actions/types'

const initialState = {
  countries: {
    'Kenya': {
      name: 'Kenya',
      region: 'Africa'
    },
    'Nigeria': {
      name: 'Nigeria',
      region: 'Africa'
    },
    'South Africa': {
      name: 'South Africa',
      region: 'Africa'
    }
  },
  countriesDetails: {
    'Kenya': {
      name: 'Kenya',
      region: 'Africa',
      flag: 'https://restcountries.eu/data/ken.svg',
      languages: [
        { iso639_1: 'en', iso639_2: 'eng', name: 'English', nativeName: 'English' },
        { iso639_1: 'sw', iso639_2: 'swa', name: 'Swahili', nativeName: 'Kiswahili' }
      ],
      capital: 'Nairobi',
      currencies: [{ code: 'KES', name: 'Kenyan shilling', symbol: 'Sh' }],
      population: 47251000
    }
  },
  selectedCountry: 'Kenya',
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
