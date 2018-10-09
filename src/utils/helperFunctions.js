/**
 * filters an array of country objects by a search string
 * ignores case
 * @param {Object[]} arrayOfCountries
 * @param {string} searchFieldInput
 * @return {Boolean}
 */
export const filterCountries = (arrayOfCountries, searchFieldInput) => {
  return arrayOfCountries.filter((country) => {
    if (searchFieldInput === '' || country.name.toLowerCase().includes(searchFieldInput)) {
      return true
    }
    return false
  })
}

/**
 * checks if an object is empty
 * @param {Object} object
 * @return {boolean}
 */
export const objectIsEmpty = (object) => {
  return Object.keys(object).length === 0 && object.constructor === Object
}

/**
 * extracts necessary information from countryObject received by api
 * the array of Objects given the API should only return one object
 * namely the country or an empty array if no country is found
 * @param {Object[]} singleCountry
 * @return {Object}
 */
export const createCountryObject = (singleCountry) => {
  const { name, region, flag, languages, capital, currencies, population } = singleCountry[0]
  return Object.assign({}, {
    countryName: name,
    regionName: region,
    flagImageLink: flag,
    languages,
    capitalCity: capital,
    currencies,
    population
  })
}
