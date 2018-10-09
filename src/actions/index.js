import * as types from './types'

export const selectCountry = name => ({
  type: types.SET_SELECTED_COUNTRY,
  name
})
