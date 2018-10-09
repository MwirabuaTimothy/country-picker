import * as types from '../actions/types'

const initialState = {
  countries: [
    {
      name: 'Bulgaria',
      region: 'Europe'
    },
    {
      name: 'Germany',
      region: 'Europe'
    },
    {
      name: 'France',
      region: 'Europe'
    }
  ],
  selectedCountry: 'Bulgaria'
}

export default function countriesReducer (state = initialState, action) {
  switch (action.type) {
    case types.SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.name
      }
    default:
      return state
  }
}
